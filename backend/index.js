import express from "express";
import "dotenv/config";
import routesNews from "./routes/routes.js";
import bodyParser from "body-parser";

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/news", routesNews);

app.get("/", (req, res) => {
  res.send("Hello Allfunds!");
});

try {
  const port = process.env.port || 3000;
  app.listen(port, () => {
    console.log(`News app listening on port ${port}`);
  });
} catch (error) {
  console.log(error);
}
