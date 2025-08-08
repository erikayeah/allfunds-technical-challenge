import express from "express";
const route = express.Router();

import getNews from "../controllers/getNews.js";
import getByID from "../controllers/getNewById.js";
import createNew from "../controllers/createNew.js";
import updateNewByID from "../controllers/updateNewByID.js";

route.get("/", getNews);

route.get("/:id", getByID);

route.patch("/:id", updateNewByID);

route.post("/", createNew);

export default route;
