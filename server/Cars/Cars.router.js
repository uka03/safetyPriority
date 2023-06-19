import express from "express";
import {
  getBrand,
  getCar,
  getCars,
  getTotalPage,
  getType,
} from "./Cars.service.js";

const Cars = express.Router();
Cars.use(express.json());

Cars.get("/cars", async (req, res) => {
  const query = req.query;
  let data = await getCars(query);
  if (data) res.status(200).send(data);
});
Cars.get("/car/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  let data = await getCar(id);
  if (data) res.status(200).send(data);
});

Cars.get("/carsTotalPage", async (req, res) => {
  const query = req.query;
  try {
    const totalPage = await getTotalPage(query);
    console.log(totalPage);
    res.status(200).send({ totalPage });
  } catch (error) {
    console.error("Error fetching paginated notes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

Cars.get("/carType", async (req, res) => {
  const carTypes = await getType();

  res.status(200).send(carTypes);
});

Cars.get("/carBrand", async (req, res) => {
  const carTypes = await getBrand();

  res.status(200).send(carTypes);
});
export default Cars;
