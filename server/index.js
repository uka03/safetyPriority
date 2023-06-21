import express from "express";
import cors from "cors";
import "./config/mongodb.config.js";
import dotenv from "dotenv";
import Cars from "./Cars/Cars.router.js";
import Admins from "./Admins/Admins.router.js";
dotenv.config();
const app = express();
const port = 3030;

app.use(cors());
app.use(Cars);
app.use(Admins);
app.use(express.json());

app.listen(port, () => {
  console.log("localhost:", port);
});
