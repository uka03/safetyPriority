import Car from "./Cars.schema.js";

export async function getCars(query) {
  try {
    const page = query.page || 1;
    delete query.page;
    const limit = query.limit || 10;
    delete query.limit;
    console.log(query, "cars");
    let cars = await Car.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
    return cars;
  } catch (error) {
    console.error(error);
    return [];
  }
}
export async function getCar(id) {
  try {
    const data = await Car.findOne({ _id: id });
    return data;
  } catch (error) {}
}
export async function getTotalPage(query) {
  try {
    const limit = parseInt(query.limit) || 10;
    delete query.limit;
    delete query.page;
    const count = await Car.countDocuments(query);

    const totalPage = Math.ceil(count / limit);
    console.log(count, totalPage, query);
    return { totalPage, count };
  } catch (error) {}
}

export async function getType() {
  try {
    const carTypes = await Car.distinct("type");
    return carTypes;
  } catch (error) {
    return error;
  }
}
export async function getBrand() {
  try {
    const carBrand = await Car.distinct("brand");
    return carBrand;
  } catch (error) {
    return error;
  }
}

export async function updateCar(id, body) {
  try {
    const result = await Car.updateOne({ _id: id }, body);
    return result;
  } catch (error) {
    return error;
  }
}
export async function createCar(body) {
  try {
    const result = await Car.insertMany(body);
    return result;
  } catch (error) {
    return error;
  }
}
