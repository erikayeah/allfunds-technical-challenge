import newsModel from "../models/newsModels.js";
import { io } from "../index.js";

const createNews = async (req, res) => {
  try {
    const { title, description, content, author } = req.body;
    if (!title || !description || !content || !author) {
      return res.status(400).send("All fields are required");
    }

    const newNews = {
      title,
      description,
      date: new Date().toISOString(),
      content,
      author,
    };

    const data = await newsModel.create(newNews);
    io.emit("insertOne", newNews);

    res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default createNews;
