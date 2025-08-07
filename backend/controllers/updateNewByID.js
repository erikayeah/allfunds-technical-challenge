const updateNewByID = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(201).json("update new");
    if (!id) {
      return res.status(400).send("News ID is required");
      // CONTINUE
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default updateNewByID;
