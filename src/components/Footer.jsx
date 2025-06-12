import React from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full left-0 flex flex-row gap-4 bg-zinc-800 text-white p-4 justify-center items-center h-[60px]">
      <div className="flex flex-col gap-4">
        Footer Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div className="flex flex-col gap-4"></div>
      <div className="flex gap-4">
        <NavLink to="/">
          <Icon icon="mdi:facebook" />
        </NavLink>
        <NavLink to="/">
          <Icon icon="mdi:instagram" />
        </NavLink>
        <NavLink to="/">
          <Icon icon="mdi:twitter" />
        </NavLink>
      </div>
    </footer>
  );
};
