const createNew = async (req, res) => {
  try {
    res.status(201).json("create ok");
    // CONTINUE
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default createNew;
