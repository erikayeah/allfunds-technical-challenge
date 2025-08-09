import express from "express";
import "dotenv/config";
import routesNews from "./routes/routes.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const { FRONTEND_ORIGIN } = process.env;
//Middlewares
app.use(
  cors({
    origin: FRONTEND_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/news", routesNews);

app.get("/", (req, res) => {
  res.send("Hello Allfunds!");
});

try {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`News app listening on port ${port}`);
  });
} catch (error) {
  console.log(error);
}
