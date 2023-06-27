import mongoose, { Schema } from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    _id: Schema.Types.ObjectId,
    name: String,
    password: String,
    email: String,
    added: String,
  },
  { collection: "admins" }
);
const Admin = mongoose.model("admin", adminSchema, "admins");

export default Admin;
