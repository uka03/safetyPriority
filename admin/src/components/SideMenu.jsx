import { Link } from "react-router-dom";

export default function SideMenu() {
  const buttons = [
    { name: "Home", path: "/", icon: "" },
    { name: "Cars", path: "/cars", icon: "" },
    { name: "Contact", path: "/nemelt", icon: "" },
    { name: "Admin", path: "/admin", icon: "" },
  ];
  // const active = "";
  const inActive =
    "h-[60px] w-full flex justify-center items-center text-white font-bold text-2xl bg-button mt-5 rounded-2xl";
  return (
    <div className="flex flex-col items-center h-screen bg-mycolor w-1/6">
      {buttons.map((button, index) => (
        <Link key={index} to={button.path} className={inActive}>
          {button.name}
        </Link>
      ))}
    </div>
  );
}
