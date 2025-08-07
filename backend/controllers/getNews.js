const getNews = async (req, res) => {
  try {
    res.status(201).json("get all news ok");
    // CONTINUE
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default getNews;
