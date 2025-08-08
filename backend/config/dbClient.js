import { MongoClient } from "mongodb";
import "dotenv/config";

const { user_db, password_db, server_db, name_db } = process.env;

class dbClient {
  constructor() {
    const uri = `mongodb+srv://${user_db}:${password_db}@${server_db}/?retryWrites=true&w=majority&appName=allfundsTC`;
    this.client = new MongoClient(uri);
    this.connectDB();
  }
  async connectDB() {
    try {
      await this.client.connect();
      this.db = this.client.db(name_db);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }
}

export default new dbClient();
