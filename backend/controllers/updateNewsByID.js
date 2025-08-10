import newsModel from "../models/newsModels.js";

const updateNewsByID = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send("News ID is required");
    }
    const data = await newsModel.updateByID(id, req.body);

    res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default updateNewsByID;
