import Admin from "./Admins.schema.js";
import jwt from "jsonwebtoken";

export async function getAdmin(name) {
  const admin = await Admin.findOne({ name: name });
  return admin;
}

export async function getLogin(info) {
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
}
