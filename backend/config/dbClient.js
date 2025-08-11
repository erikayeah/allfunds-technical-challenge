import { MongoClient } from "mongodb";
import "dotenv/config";

const { USER_DB, PASSWORD_DB, SERVER_DB, NAME_DB } = process.env;
class dbClient {
  constructor() {
    const uri = `mongodb+srv://${USER_DB}:${PASSWORD_DB}@${SERVER_DB}/?retryWrites=true&w=majority&appName=allfundsTC`;
    this.client = new MongoClient(uri);
    this.connectDB();
  }
  async connectDB() {
    try {
      await this.client.connect();
      this.db = this.client.db(NAME_DB);
      await this.db.runCommand({
        collMod: "news",
        validator: {
          $jsonSchema: {
            bsonType: "object",
            title: "News Object Validation",
            required: [
              "_id",
              "title",
              "description",
              "date",
              "content",
              "author",
            ],
            properties: {
              _id: {
                bsonType: "objectId",
                description: "'_id' must be an ObjectId and is required",
              },
              title: {
                bsonType: "string",
                description: "'title' must be a string and is required",
              },
              description: {
                bsonType: "string",
                description: "'descriptionle' must be a string and is required",
              },
              date: {
                bsonType: "date",
                description: "'date' is required",
              },
              content: {
                bsonType: "string",
                description: "'content' must be a string and is required",
              },
              author: {
                bsonType: "string",
                description: "'author' must be a string and is required",
              },
            },
          },
        },
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }
}

export default new dbClient();
