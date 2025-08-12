import dbClient from "../config/dbClient.js";
import { ObjectId } from "mongodb";

class NewsModel {
  async create(newsItem) {
    const news = dbClient.db.collection("news");
    return await news.insertOne(newsItem);
  }

  async createMany(newsList) {
    const news = dbClient.db.collection("news");
    return await news.insertMany(newsList);
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

  async updateByID(id, updatedData) {
    const news = dbClient.db.collection("news");
    return await news.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedData }
    );
  }

  async removeByID(id) {
    const newsToArchive = await dbClient.db
      .collection("news")
      .findOne({ _id: new ObjectId(id) });

    await dbClient.db.collection("removeNews").insertOne(newsToArchive);
    return await this.deleteById(id);
  }
}

export default new NewsModel();
