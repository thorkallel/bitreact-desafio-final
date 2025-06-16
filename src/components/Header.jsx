import React from "react";
import { Navbar } from "./Navbar";
import LogoWhite from "../assets/img/template/logo-w.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-black to-zinc-800 z-50">
      <div className="mx-auto px-4 h-[100px] flex justify-between items-center text-white">
        <div className="logo w-[168px] h-[76px] flex items-center justify-center">
          <img
            src={LogoWhite}
            alt="Logo"
            className="h-full w-auto object-contain cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <Navbar />
      </div>
    </header>
  );
};
