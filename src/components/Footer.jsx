import React from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { Forms } from "./Forms";
import LogoWhite from "../assets/img/template/logo-w.svg";

export const Footer = () => {
  return (
    <>
      <Forms />
      <footer className="w-full left-0 flex flex-col bg-zinc-800 text-white">
        <div className="flex flex-row gap-4 p-4 justify-center items-center h-[60px]">
          <div className="flex flex-col gap-4">Follow us on social media.</div>
          <div className="flex flex-col gap-4"></div>
          <div className="flex gap-4">
            <NavLink to="/">
              <Icon
                icon="mdi:facebook"
                className="w-8 h-8 text-white text-center"
              />
            </NavLink>
            <NavLink to="/">
              <Icon
                icon="mdi:instagram"
                className="w-8 h-8 text-white text-center"
              />
            </NavLink>
            <NavLink to="/">
              <Icon
                icon="mdi:twitter"
                className="w-8 h-8 text-white text-center"
              />
            </NavLink>
            <NavLink to="/">
              <Icon
                icon="mdi:linkedin"
                className="w-8 h-8 text-white text-center"
              />
            </NavLink>
            <NavLink to="/">
              <Icon
                icon="mdi:youtube"
                className="w-8 h-8 text-white text-center"
              />
            </NavLink>
          </div>
        </div>

        <div className="w-full border-t border-gray-700 bg-black">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center justify-center gap-4">
            <img
              src={LogoWhite}
              alt="Bucephalus Logo"
              className="h-20 w-auto"
            />
            <div className="text-center text-gray-400 text-sm font-libre">
              <p>© MMXXV Bucephalus Colombia. All rights reserved.</p>
              <p className="mt-1">Luxury Automotive Excellence</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
