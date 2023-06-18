import Car from "../components/Car";
import carData from "../util/carData.json";

export default function Cars() {
  const cars = carData.data;
  console.log(carData.data);
  return (
    <>
      <div className="flex flex-wrap justify-around min-h-screen h-100 w-9/12 border-l-2 border-white text-white">
        {cars.map((car, index) => (
          <Car car={car} key={index} />
        ))}
      </div>
    </>
  );
}
