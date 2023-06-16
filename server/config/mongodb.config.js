import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
try {
  mongoose.connect(process.env.MONGODB_CONNECT_URL);
  console.log("connected");
} catch (error) {
  console.log("not connected");
}

export default mongoose.connection;
