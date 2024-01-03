"use client";
import React, { useState } from "react";
import menuItems from "../Data/menuItems";

import Menulink from "./Menulink";

function getInitials(name) {
  const parts = name.split(" ");
  let initials = "";

  for (let i = 0; i < parts.length; i++) {
    initials += parts[i][0];
  }

  return initials.toUpperCase();
}

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div
      className={`flex flex-col w-[250px] h-[100vh] bg-black text-white sticky top-0 left-0 p-[5px] border-r-2 ${
        isOpen ? "block" : "hidden"
      } ${isMinimized ? "w-[50px]" : "w-[250px]"}`}
    >
      <button
        className="absolute top-0 right-0 p-2"
        onClick={() => setIsMinimized(!isMinimized)}
      >
        Minimize
      </button>

      <div className="h-20 mt-[20px] ">
        <p
          className={`font-semibold text-center text-2xl ${
            isMinimized ? "hidden" : "block"
          }`}
        >
          Kuku Farm.
        </p>
      </div>

      <div className={`px-8 py-3 ${isMinimized ? "hidden" : "block"}`}>
        <ul>
          {menuItems.map((cat) => (
            <li key={cat.title}>
              <span className="capitalize font-semibold text-xl text-gray-500 ">
                {" "}
                {cat.title}{" "}
              </span>
              {cat.list.map((item) => (
                <Menulink item={item} key={item.title} />
              ))}
            </li>
          ))}
        </ul>
      </div>

      <div className={`flex flex-col ${isMinimized ? "block" : "hidden"}`}>
        {menuItems.map((cat) => (
          <React.Fragment key={cat.title}>
            {cat.list.map((item) => (
              <div className="p-2" key={item.title}>
                {item.icon}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
