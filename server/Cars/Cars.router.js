import express from "express";
import {
  createCar,
  getBrand,
  getCar,
  getCars,
  getTotalPage,
  getType,
  updateCar,
} from "./Cars.service.js";
import multer from "multer";
import { nanoid } from "nanoid";
import { uploadImage } from "../cloudinary/uploadService.js";

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
    const { totalPage, count } = await getTotalPage(query);
    console.log(totalPage);
    res.status(200).send({ totalPage, count });
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
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp");
  },
  filename: (req, file, cb) => {
    const ext = extractExtension(file.originalname);
    const newName = nanoid() + "." + ext;
    cb(null, newName);
  },
});

const extractExtension = (name) => {
  try {
    const splitted = name.split(".");
    return splitted[splitted.length - 1];
  } catch (error) {
    console.error(error);
  }
};

const upload = multer({ storage: storage });

Cars.put("/cars/:id", upload.single("image"), async (req, res) => {
  try {
    let imageUrl;
    const id = req.params.id;
    const resbody = req.body.body;
    const body = JSON.parse(resbody);
    if (req.file) {
      imageUrl = await uploadImage(req.file);
      body.image = imageUrl;
    }
    body.update_date = Date();
    const result = await updateCar(id, body);
    res.send(result);
  } catch (error) {
    console.error(error);
  }
});
Cars.post("/cars", upload.single("image"), async (req, res) => {
  try {
    let imageUrl;
    const resbody = req.body.body;
    const body = JSON.parse(resbody);
    if (req.file) {
      imageUrl = await uploadImage(req.file);
      body.image = imageUrl;
    }
    body.update_date = Date();
    body.created_date = Date();
    const result = await createCar(body);
    res.send(result);
  } catch (error) {
    console.error(error);
  }
});

export default Cars;
