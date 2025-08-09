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
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }
}

export default new dbClient();
