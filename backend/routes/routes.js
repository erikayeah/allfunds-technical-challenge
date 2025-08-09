import express from "express";
const route = express.Router();

import getNews from "../controllers/getNews.js";
import getByID from "../controllers/getNewById.js";
import createNew from "../controllers/createNew.js";
import updateNewByID from "../controllers/updateNewByID.js";
import deleteNewsByID from "../controllers/deleteNews.js";

route.get("/", getNews);
route.post("/", createNew);
route.get("/:id", getByID);
route.patch("/:id", updateNewByID);
route.delete("/:id", deleteNewsByID);

export default route;
