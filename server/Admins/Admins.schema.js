import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    _id: String,
    name: String,
    password: String,
    email: String,
    added: String,
  },
  { collection: "admins" }
);
const Admin = mongoose.model("admin", adminSchema, "admins");

export default Admin;
