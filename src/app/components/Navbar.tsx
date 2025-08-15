"use client";

import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="w-full  p-3">
      <div className="flex flex-row justify-between">
        {" "}
        <Link href={"/"}>
          <div className="logo text-3xl font-bold  cursor-pointer flex flex-row ">
            {" "}
            <h1 className="text-white italic">John</h1>{" "}
            <h1 className=" text-red-700 px-1.5">Wick</h1>
          </div>
        </Link>
        <ul className="text-white flex flex-row gap-3 font-semibold text-xl">
          <Link
            href="#about"
            className="hover:bg-red-800 rounded-2xl p-2 hover:text-black"
          >
            <li>About</li>
          </Link>
          
          <Link
            href="#latest"
            className="hover:bg-red-800 rounded-2xl p-2 hover:text-black"
          >
            <li>Latest</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
