import newsModel from "../models/newsModels.js";

const getNews = async (req, res) => {
  try {
    const data = await newsModel.getAll();
    res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default getNews;
