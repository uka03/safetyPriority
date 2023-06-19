import React from "react";
import { about, contact, socials } from "../util/util";
export default function Contact(props) {
  return (
    <div className="container mx-auto mt-20 py-10">
      <div className="w-full flex flex-col md:flex-row justify-between p-4 gap-5">
        <div className="md:w-2/5 rounded-xl shadow-xl  ">
          <img
            src={about.image}
            alt=""
            className="w-full  rounded-xl"
            srcset=""
          />
        </div>
        <div className="md:w-3/5 flex p-4 flex-col justify-around border-4 border-amber-500 rounded-3xl md:p-10 shadow-xl shadow-amber-400">
          <h1 className="w-full text-4xl md:text-7xl text-center text-amber-500">
            About us
          </h1>
          <p className="md:text-base text-xs">{about.description}</p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between p-4 gap-5">
        <div className="md:w-3/5 flex flex-col gap-5 justify-around border-4 border-amber-500 rounded-3xl p-4 md:p-10 shadow-xl shadow-amber-400 order-2">
          <h1 className="w-full text-4xl md:text-7xl text-center text-amber-500 ">
            Contact us
          </h1>
          <div className="flex justify-between text-xs md:text-base gap-4">
            <div className="w-1/2 flex flex-col gap-4 ">
              {socials.map((con) => {
                return (
                  <div className="flex gap-1 items-center">
                    <div className="">{con.icon}</div>
                    <p>{con.name}:</p>
                    <p> {con.address}</p>
                  </div>
                );
              })}
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              {contact.contacts.map((con) => {
                return (
                  <div className="flex gap-1 items-center">
                    <div className="">{con.icon}</div>
                    <p>
                      {con.name} : {con.address}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="md:w-2/5 rounded-xl shadow-xl order-1 md:order-5">
          <img
            src={contact.image}
            alt=""
            className="w-full  rounded-xl"
            srcset=""
          />
        </div>
      </div>
    </div>
  );
}
