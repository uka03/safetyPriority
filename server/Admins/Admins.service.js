import Admin from "./Admins.schema.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
export async function getAdmins() {
  try {
    const admin = await Admin.find({});
    return admin;
  } catch (error) {
    return error;
  }
}
export async function getAdmin(name) {
  try {
    const admin = await Admin.findOne({ name: name });
    return admin;
  } catch (error) {
    return error;
  }
}
export async function deleteAdmin(id) {
  try {
    const admin = await Admin.deleteOne({ _id: id });
    return admin;
  } catch (error) {
    return error;
  }
}
export async function createAdmin(info) {
  try {
    const exists = await Admin.find({ name: info.name });
    if (exists.length > 0)
      return { status: false, message: "name already exists" };
    const admin = await Admin.insertMany(info);

    return { status: true, message: "successfully added by admin" };
  } catch (error) {
    return error;
  }
}

export async function getLogin(info) {
  try {
    const admin = await getAdmin(info.name);
    if (!admin) return { message: "name is wrong", status: false };
    if (admin.password === info.password) {
      const token = jwt.sign({ admin }, "secretkeyappearshere", {
        expiresIn: "2h",
      });
      return { message: "success", status: true, token };
    } else {
      return { message: "password is wrong", status: false };
    }
  } catch (error) {
    return error;
  }
}
