import newsModel from "../models/newsModels.js";

const createManyNews = async (req, res) => {
  try {
    const manyNewsWithDate = req.body.map((newsItem) => ({
      ...newsItem,
      date: new Date().toISOString(),
    }));

    const data = await newsModel.createMany(manyNewsWithDate);
    res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default createManyNews;
