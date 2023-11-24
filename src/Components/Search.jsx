import React from "react";
import Banner from "../assets/img/banner.png";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <div className=" flex flex-col justify-center px-[70px] md:px-[150px] relative items-center ">
      <img src={Banner} alt="banner" className=" rounded-xl " />
      <div className="overflow-hidden flex items-center rounded-xl justify-between bg-gray-300 h-12 w-[65%] -bottom-6 shadow-lg mt-[-25px] mx-[25%]">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent ml-8 outline-none w-[100%]  h-12 "
        />
        <button className="px-4 py-8 hover:shadow-slate-600 bg-gray-950 text-gray-300 hover:outline-none hover:bg-gray-600 hover:text-gray-900 rounded-none">
          <FaSearch className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Search;
