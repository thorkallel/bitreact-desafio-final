import React, { useState } from "react";
import { Cart } from "./Cart";
import { NavLink } from "react-router-dom";
import { Login } from "./Login";
import { useUserContext } from "../context/UserContext";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useUserContext();
  const handleNavigation = (section) => {
    console.log(`Navigating to ${section}`);
    setOpen(false);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky w-full flex top-3 p-0 relative z-20 gap-4">
      <div className="block md:hidden ml-auto pr-4 my-auto cursor-pointer"></div>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-gradient-to-b from-zinc-900 to-black transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full pt-20 px-4">
            <NavLink
              to="/"
              className="text-white text-lg py-3 hover:text-[#35FF3D] transition-colors"
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/inventory"
              className="text-white text-lg py-3 hover:text-[#35FF3D] transition-colors"
              onClick={() => setOpen(false)}
            >
              Inventory
            </NavLink>
            <NavLink
              to="/aboutus"
              className="text-white text-lg py-3 hover:text-[#35FF3D] transition-colors"
              onClick={() => setOpen(false)}
            >
              About us
            </NavLink>
            <NavLink
              to="/ourservices"
              className="text-white text-lg py-3 hover:text-[#35FF3D] transition-colors"
              onClick={() => setOpen(false)}
            >
              Our services
            </NavLink>
            {user && user.username ? (
              <NavLink
                to="/userzone"
                className="text-white text-lg py-3 hover:text-[#35FF3D] transition-colors"
                onClick={() => setOpen(false)}
              >
                User zone
              </NavLink>
            ) : null}
            <div
              className="text-white text-lg py-3 hover:text-[#35FF3D] transition-colors cursor-pointer"
              onClick={() => {
                handleNavigation("contact");
                setOpen(false);
              }}
            >
              Contact us
            </div>
            <div className="mt-auto pb-8">
              <Login />
              {user && user.username && (
                <div className="mt-4">
                  <Cart />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden flex-1 items-center justify-end md:flex gap-3">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link cursor-pointer text-[#35FF3D]"
              : "nav-link cursor-pointer hover:text-[#35FF3D]"
          }
          to="/"
        >
          <span className="text-sm font-libre hover:text-[#35FF3D]">Home</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link cursor-pointer text-[#35FF3D]"
              : "nav-link cursor-pointer hover:text-[#35FF3D]"
          }
          to="/inventory"
        >
          <span className="text-sm font-libre hover:text-[#35FF3D]">
            Inventory
          </span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link cursor-pointer text-[#35FF3D]"
              : "nav-link cursor-pointer hover:text-[#35FF3D]"
          }
          to="/aboutus"
        >
          <span className="text-sm font-libre hover:text-[#35FF3D]">
            About us
          </span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link cursor-pointer text-[#35FF3D]"
              : "nav-link cursor-pointer hover:text-[#35FF3D]"
          }
          to="/ourservices"
        >
          <span className="text-sm font-libre hover:text-[#35FF3D]">
            Our services
          </span>
        </NavLink>
        {user && user.username ? (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav-link cursor-pointer text-[#35FF3D]"
                : "nav-link cursor-pointer hover:text-[#35FF3D]"
            }
            to="/userzone"
          >
            <span className="text-sm font-libre hover:text-[#35FF3D]">
              User zone
            </span>
          </NavLink>
        ) : null}
        {user && user.username ? (
          <div className="flex items-center justify-center my-auto relative">
            <Cart />
          </div>
        ) : null}
        <div className="flex items-center justify-center my-auto relative">
          <Login />
        </div>
        <div
          className="nav-link cursor-pointer"
          onClick={() => handleNavigation("contact")}
        >
          <span className="text-sm font-libre hover:text-[#35FF3D]">
            Contact us
          </span>
        </div>
      </div>
      <div className="flex md:hidden items-center justify-center my-auto relative">
        <button
          id="mobile-menu-button"
          className="relative w-8 h-8 flex flex-col items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle mobile menu"
          aria-expanded={open}
        >
          <div
            className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? "rotate-45 top-4" : "top-2"
            }`}
          ></div>
          <div
            className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? "opacity-0" : "top-4"
            }`}
          ></div>
          <div
            className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? "-rotate-45 top-4" : "top-6"
            }`}
          ></div>
        </button>
      </div>
    </nav>
  );
};
