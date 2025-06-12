import React from "react";
import { Navbar } from "./Navbar";
import LogoWhite from "../assets/img/template/logo-w.svg";

export const Header = () => {
  return (
    <header className="sticky flex p-0 bg-gradient-to-r from-zinc-600 to-zinc-900 relative z-20 justify-between items-center h-[100px] text-white p-4">
      <div className="logo w-[168px] h-[76px] flex items-center justify-center">
        <img
          src={LogoWhite}
          alt="Logo"
          className="h-full w-auto object-contain"
        />
      </div>
      <Navbar />
    </header>
  );
};
