import express from "express";
const route = express.Router();

import getNews from "../controllers/getNews.js";
import getByID from "../controllers/getNewsByID.js";
import createNews from "../controllers/createNews.js";
import updateNewsByID from "../controllers/updateNewsByID.js";
import deleteNewsByID from "../controllers/deleteNews.js";
import removeNewsByID from "../controllers/removeNewsByID.js";
import createManyNews from "../controllers/createManyNews.js";

route.get("/", getNews);

// NOTE: Route currently not used by the frontend but available for future integrations(creation form).
route.post("/", createNews);

// NOTE: Route currently not used by the frontend but available for future integrations(bulk creation).
route.post("/many", createManyNews);

route.delete("/remove/:id", removeNewsByID);

// NOTE: Route currently not used by the frontend but available for future integrations(detail page).
route.get("/:id", getByID);

route.patch("/:id", updateNewsByID);

route.delete("/:id", deleteNewsByID);

export default route;
