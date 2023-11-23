import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex items-center justify-between bg-gray-300 rounded-md p-2">
      <img src={logo} className="h-[80px] cursor-pointer hover:" />

      <ul className="flex gap-4 text-center md:gap-14">
        <li className="cursor-pointer hover:font-bold">Home</li>
        <li className="cursor-pointer hover:font-bold">About us</li>
        <li className="cursor-pointer hover:font-bold">Contact us</li>
      </ul>

      <div className="group flex items-center gap-1 border-none">
        <button className="hover:bg-gray-500 bg-gray-950 group-hover:text-gray-950 text-gray-300  rounded-full px-2 py-1 font-light flex items-center gap-1">
          Subscribe
          <FaYoutube className="text-2xl group-hover:text-gray-950" />
        </button>
      </div>
    </div>
  );
};

export default Header;
