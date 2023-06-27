import express from "express";
import {
  createAdmin,
  deleteAdmin,
  getAdmin,
  getAdmins,
  getLogin,
} from "./Admins.service.js";

const Admins = express.Router();
Admins.use(express.json());

Admins.get("/admins", async (req, res) => {
  try {
    const result = await getAdmins();
    res.send(result).status(200);
  } catch (error) {}
});
Admins.get("/admin`", async (req, res) => {
  try {
    const id = req.query.id;
    const result = await getAdmin(id);
    res.send(result).status(200);
  } catch (error) {}
});
Admins.delete("/admin", async (req, res) => {
  try {
    const id = req.query.id;

    const result = await deleteAdmin(id);

    res.send(result).status(200);
  } catch (error) {}
});
Admins.post("/login", async (req, res) => {
  try {
    const info = req.body;
    const Login = await getLogin(info);

    if (Login.status) {
      res.status(200).send(Login);
    } else {
      res.status(203).send(Login);
    }
  } catch (error) {
    console.log(error);
  }
});
Admins.post("/admins", async (req, res) => {
  try {
    const info = req.body;

    const result = await createAdmin(info);

    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

export default Admins;
