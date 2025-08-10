import newsModel from "../models/newsModels.js";

const removeNewsByID = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send("News ID is required");
    }

    const data = await newsModel.removeByID(id);

    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default removeNewsByID;
