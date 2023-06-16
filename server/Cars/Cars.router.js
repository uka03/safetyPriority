import express from "express";
import { getCars } from "./Cars.service.js";

const Cars = express.Router();
Cars.use(express.json());

Cars.get("/cars", async (req, res) => {
  let data = await getCars();
  console.log(data);
  if (data) res.status(200).send(data);
});

export default Cars;
