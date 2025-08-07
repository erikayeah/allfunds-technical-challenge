import { MongoClient } from "mongodb";
import "dotenv/config";

class dbClient {
  constructor() {
    const uri = `mongodb+srv://${process.env.user_db}:${process.env.password_db}@${process.env.server_db}/?retryWrites=true&w=majority&appName=allfundsTC`;
    this.client = new MongoClient(uri);
    this.connectDB();
  }
  async connectDB() {
    try {
      await this.client.connect();
      this.db = this.client.db(process.env.name_db);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }
}

export default new dbClient();
