import Car from "./Cars.schema.js";

export async function getCars() {
  try {
    let cars = await Car.find().exec();
    console.log(cars);
    return cars;
  } catch (error) {
    console.error(error);
    return [];
  }
}
