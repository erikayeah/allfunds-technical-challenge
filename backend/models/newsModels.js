import dbClient from "../config/dbClient.js";
import { ObjectId } from "mongodb";

class NewsModel {
  async create(newItem) {
    const news = dbClient.db.collection("news");
    return await news.insertOne(newItem);
  }

  async getAll() {
    const news = dbClient.db.collection("news");
    return await news.find({}).toArray();
  }

  async getById(id) {
    const news = dbClient.db.collection("news");
    return await news.findOne({ _id: new ObjectId(id) });
  }

  async deleteById(id) {
    const news = dbClient.db.collection("news");
    return await news.deleteOne({ _id: new ObjectId(id) });
  }

  async updateNewByID(id, updatedData) {
    const news = dbClient.db.collection("news");
    return await news.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedData }
    );
  }
}

export default new NewsModel();
