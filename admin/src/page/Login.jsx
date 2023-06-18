export default function Login() {
  return (
    <>
      <div className="h-screen w-full bg-mycolor absolute z-20 mb-1.5 flex">
        <div className="w-1/2 bg-button h-screen">
          <img
            src="https://img.freepik.com/premium-photo/beautiful-landscape-based-3d-rendering-illustration_771975-25.jpg?w=500"
            alt=""
            className="w-full h-screen"
          />
        </div>
        <div className=" w-1/2 flex justify-center items-center">
          <form className="flex flex-col h-96 text-white justify-around items-center ">
            <div className="text-7xl font-bold">Safety Priority</div>
            <div className="ml-auto font-bold">Mongolian car rental</div>
            <div className="text-3xl font-bold">Dashboard Log in</div>
            <input
              className="h-12 w-3/4 text-black px-5  rounded-2xl"
              type="text"
              placeholder="Phone number"
            />

            <input
              className="h-12 w-3/4 text-black px-5 rounded-2xl"
              type="password"
              placeholder="password"
            />
            <button className="h-12 w-3/4 bg-button rounded-2xl">Log in</button>
          </form>
        </div>
      </div>
    </>
  );
}
