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
      await this.db.command({
        collMod: "news",
        validator: {
          $jsonSchema: {
            bsonType: "object",
            title: "News Object Validation",
            required: ["title", "description", "date", "content", "author"],
            properties: {
              title: {
                bsonType: "string",
                description: "'title' must be a string and is required",
              },
              description: {
                bsonType: "string",
                description: "'description' must be a string and is required",
              },
              date: {
                bsonType: "string",
                description:
                  "'date' is required as astring because toISOString",
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
