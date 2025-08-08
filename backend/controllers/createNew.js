import newsModel from "../models/newsModels.js";

const createNew = async (req, res) => {
  try {
    const data = await newsModel.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default createNew;
