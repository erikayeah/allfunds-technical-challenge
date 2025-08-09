import newsModel from "../models/newsModels.js";

const deleteNewsByID = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Deleting news with ID: ${id}`);
    const data = await newsModel.deleteById(id);
    res.status(204).json(data);

    if (!id) {
      return res.status(400).send("News ID is required");
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default deleteNewsByID;
