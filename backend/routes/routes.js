import express from "express";
const route = express.Router();

import getNews from "../controllers/getNews.js";
import getByID from "../controllers/getNewsByID.js";
import createNews from "../controllers/createNews.js";
import updateNewsByID from "../controllers/updateNewsByID.js";
import deleteNewsByID from "../controllers/deleteNews.js";

route.get("/", getNews);
route.post("/", createNews);
route.get("/:id", getByID);
route.patch("/:id", updateNewsByID);
route.delete("/:id", deleteNewsByID);

export default route;
