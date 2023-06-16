import express from "express";
import cors from "cors";
import "./config/mongodb.config.js";
import dotenv from "dotenv";
import Cars from "./Cars/Cars.router.js";
dotenv.config();
const app = express();
const port = 3030;

app.use(cors());
app.use(Cars);
app.use(express.json());

app.listen(port, () => {
  console.log("localhost:", port);
});
