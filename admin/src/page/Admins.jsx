import React from "react";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useUsers } from "../context/User.context";
import { toast } from "react-toastify";
import axios from "axios";

const Admins = () => {
  const { admins, admin, setRefresh, refresh } = useUsers();
  const [passShow, setPassShow] = useState();
  const [newPassShow, setNewPassShow] = useState(true);
  const [newAdmin, setNewAdmin] = useState({});

  function SecretPassword(num) {
    let secret = "";
    for (let i = 0; i < num; i++) {
      secret = secret + "*";
    }
    return secret;
  }

  function deleteHandler(id) {
    axios
      .delete(`http://localhost:3030/admin?id=${id}`)
      .then((res) => console.log(res));
  }
  function CreateAdmin() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(newAdmin.email);
    newAdmin.added = admin.name;
    if (!isValid) {
      toast.error("email is wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (newAdmin.name === "" || newAdmin.name === undefined) {
      toast.error("Name is missing", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (newAdmin.password === "" || newAdmin.password === undefined) {
      toast.error("Password is missing", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    axios.post("http://localhost:3030/admins", newAdmin).then((res) => {
      if (!res.data.status) {
        toast.error(res.data.message);
      } else {
        setRefresh(!refresh);
        toast.success(res.data.message);
        setNewAdmin({});
      }
    });
  }
  return (
    <div className="p-5 w-full flex-col flex items-end gap-2">
      <table className="w-full border-collapse self-start ">
        <thead>
          <tr className="bg-amber-500">
            <th className="text-white py-2 px-4">_id</th>
            <th className="text-white py-2 px-4">name</th>
            <th className="text-white py-2 px-4">password</th>
            <th className="text-white py-2 px-4">email</th>
            <th className="text-white py-2 px-4">added</th>
            <th className="text-white py-2 px-4">| | |</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((row) => (
            <tr key={row._id} className="hover:bg-gray-100 border-b">
              <td className="border py-2 px-4">{row._id}</td>
              <td className="border py-2 px-4">{row.name}</td>

              {passShow === row._id ? (
                <td className=" py-2 px-4 flex justify-between">
                  <p>{row.password}</p>
                  <button
                    onClick={() => {
                      setPassShow(undefined);
                    }}
                  >
                    <FiEyeOff />
                  </button>
                </td>
              ) : (
                <td className=" py-2 px-4 flex justify-between">
                  <p>{SecretPassword(Number(row.password.length))}</p>
                  <button
                    onClick={() => {
                      setPassShow(row._id);
                    }}
                  >
                    <FiEye />
                  </button>
                </td>
              )}

              <td className="border py-2 px-4">{row.email}</td>
              <td className="border py-2 px-4">{row.added}</td>
              <td className="border py-2 px-4 flex justify-between gap-2">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => deleteHandler(row._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr className="hover:bg-gray-100 border-b">
            <td className="border py-2 px-4">Unique id</td>
            <td className="border py-2 px-4">
              <input
                type="text"
                className="focus:outline-none bg-transparent"
                placeholder="enter admin name"
                onChange={(e) => {
                  newAdmin.name = e.target.value;
                  setNewAdmin({ ...newAdmin });
                }}
              />
            </td>
            <td className=" py-2 px-4 flex justify-between">
              <input
                type={newPassShow ? `password` : "text"}
                className="focus:outline-none bg-transparent"
                placeholder="enter password"
                onChange={(e) => {
                  newAdmin.password = e.target.value;
                  setNewAdmin({ ...newAdmin });
                }}
              />
              <button
                onClick={() => {
                  setNewPassShow(!newPassShow);
                }}
              >
                {newPassShow ? <FiEye /> : <FiEyeOff />}
              </button>
            </td>
            <td className="border py-2 px-4">
              <input
                type="email"
                className="focus:outline-none bg-transparent"
                placeholder="enter email"
                onChange={(e) => {
                  newAdmin.email = e.target.value;
                  setNewAdmin({ ...newAdmin });
                }}
              />
            </td>
            <td className="border py-2 px-4">{admin.name}</td>
            <td className="border py-2 px-4 flex justify-center">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={CreateAdmin}
              >
                Add admin
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Admins;
