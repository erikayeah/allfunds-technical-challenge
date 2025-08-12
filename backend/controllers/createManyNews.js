import newsModel from "../models/newsModels.js";
import { io } from "../index.js";

const createManyNews = async (req, res) => {
  try {
    const manyNewsWithDate = req.body.map((newsItem) => ({
      ...newsItem,
      date: new Date().toISOString(),
    }));

    const data = await newsModel.createMany(manyNewsWithDate);
    io.emit("insertMany", manyNewsWithDate);
    res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default createManyNews;
