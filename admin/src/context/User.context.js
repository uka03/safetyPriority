import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const UserContext = createContext();

export const useUsers = () => useContext(UserContext);

export default function UserProvider({ children }) {
  const exist = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState(exist ? true : false);

  async function Login(info) {
    const login = await axios.post("http://localhost:3030/admins", info);
    if (login.data.status) {
      localStorage.setItem("token", login.data.token);
      toast.success(login.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setIsLogin(true);
      window.location.href = "/";
    } else {
      toast.error(login.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <UserContext.Provider value={{ isLogin, Login }}>
      {children}
    </UserContext.Provider>
  );
}
