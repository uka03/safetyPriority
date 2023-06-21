import express from "express";
import { getAdmin, getLogin } from "./Admins.service.js";

const Admins = express.Router();
Admins.use(express.json());

Admins.post("/admins", async (req, res) => {
  const info = req.body;
  const Login = await getLogin(info);
  console.log(Login);
  if (Login.status) {
    res.status(200).send(Login);
  } else {
    res.status(203).send(Login);
  }
});

export default Admins;
