import newsModel from "../models/newsModels.js";

const getNewByID = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Fetching news with ID: ${id}`);
    const data = await newsModel.getById(id);
    res.status(201).json(data);

    if (!id) {
      return res.status(400).send("News ID is required");
      // CONTINUE
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default getNewByID;
