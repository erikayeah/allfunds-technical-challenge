import "dotenv/config";
import express from "express";
import { createServer } from "http";
import { Server as SocketServer } from "socket.io";
import routesNews from "./routes/routes.js";
import bodyParser from "body-parser";
import cors from "cors";

const PORT = process.env.PORT || 3000;

const app = express();
const server = createServer(app);

export const io = new SocketServer(server, {
  cors: {
    origin: "*",
  },
});

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/news", routesNews);

try {
  server.listen(PORT, () => {
    console.log(`News app listening on port ${PORT}`);
  });
} catch (error) {
  console.log(error);
}
