import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

export const UserContext = createContext();

export const useUsers = () => useContext(UserContext);

export default function UserProvider({ children }) {
  const exist = localStorage.getItem("token");
  const [admins, setAdmins] = useState([]);
  const [isLogin, setIsLogin] = useState(exist ? true : false);
  const [admin, setAdmin] = useState("");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const decoded = jwt_decode(token);
      console.log(decoded);
      setAdmin(decoded.admin);
    } catch (error) {
      console.log("Failed to decode the token:", error);
    }
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3030/admins").then((res) => {
      setAdmins(res.data);
    });
  }, [refresh]);

  async function Login(info) {
    const login = await axios.post("http://localhost:3030/login", info);
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
    <UserContext.Provider
      value={{ refresh, isLogin, Login, admins, admin, setRefresh }}
    >
      {children}
    </UserContext.Provider>
  );
}
