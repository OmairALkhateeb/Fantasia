"use client";
import React from "react";
import Image from "next/image";
import Menu from "@/assets/icons/menu.png";
import Search from "@/assets/icons/search.png";
import Sun from "@/assets/icons/sun.png";
import Logo from "@/assets/icons/logo.svg";
import Arch from "@/assets/icons/arch.svg";
import Store from "@/assets/icons/store.svg";

const Navbar = ({ navbarColor }) => {
  return (
    <nav
      className="p-4 fixed top-0 w-full transition-all z-50 group" 
      style={{
        backgroundColor: navbarColor, 
        transition: "background-color 0.2s ease-in-out", 
      }}
    >
      <div className="flex items-center justify-between">
        {/* Left Side - Menu Button */}
        <div className="flex items-center gap-4">
          <Image
            src={Menu}
            width={20}
            height={20}
            alt="menu"
            className="cursor-pointer"
            style={{
              filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(360deg)",
            }}
          />
        </div>

        {/* Center - Logo */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-1">
            <Image src={Logo} alt="logo" width={64} height={64} />
            <p className="text-lg font-semibold text-white">Fantasia Shop</p>
          </div>
        </div>

        {/* Right Side - Icons */}
        <div className="flex items-center gap-4">
          <Image
            src={Store}
            alt="Store"
            width={20}
            height={20}
            className="cursor-pointer filter invert"
            style={{
              filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(360deg)",
            }}
          />
          <Image
            src={Search}
            width={20}
            height={20}
            alt="Search"
            className="cursor-pointer"
          />
          <Image
            src={Sun}
            width={20}
            height={20}
            alt="Sun"
            className="cursor-pointer"
          />
          <Image
            src={Arch}
            alt="Arch"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Add hover background color using a wrapper */}
      <style jsx>{`
        nav:hover {
          background-color: #000112 !important; /* Apply hover color */
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
