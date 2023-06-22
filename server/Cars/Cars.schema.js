import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    name: String,
    brand: String,
    image: String,
    category: String,
    door: Number,
    maxPassenger: Number,
    condition: Boolean,
    color: String,
    gearBox: String,
    driver: Boolean,
    price: Number,
    interior_color: String,
    music: String,
    drivetrain: String,
    speed: Number,
    created_data: String,
    special: Boolean,
    description: String,
    update_date: String,
  },
  {
    collection: "cars",
  }
);

const Car = mongoose.model("Car", carSchema, "cars");

export default Car;
