import { GithubIcon } from "lucide-react";
import Logoimg from "../assets/logo.png";
import React from "react";
import { NavLink, Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <NavLink to="/" className="navbar-start max-md:hidden">
        <img className="w-10 h-10" src={Logoimg} alt="" />
        <h1 className="text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ml-2">
          HERO.IO
        </h1>
      </NavLink>

      {/* CENTER / DROPDOWN (Visible on mobile) */}
      <div className="navbar-center md:hidden flex justify-between w-full">
        {/* Dropdown menu (left) */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#632EE3] font-bold" : "hover:text-[#632EE3]"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#632EE3] font-bold" : "hover:text-[#632EE3]"
                }
                to="/apps"
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#632EE3] font-bold" : "hover:text-[#632EE3]"
                }
                to="/installation"
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contribute button (right) */}
        <button
          onClick={() => window.open("https://github.com/alihasna32", "_blank")}
          className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white flex p-2 rounded-md md:flex cursor-pointer"
        >
          <GithubIcon />
          Contribute
        </button>
      </div>

      {/* DESKTOP MENU */}
      <div className="navbar-end hidden md:flex justify-between">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#632EE3] font-bold" : "hover:text-[#632EE3]"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#632EE3] font-bold" : "hover:text-[#632EE3]"
              }
              to="/apps"
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#632EE3] font-bold" : "hover:text-[#632EE3]"
              }
              to="/installation"
            >
              Installation
            </NavLink>
          </li>
        </ul>

        <button
          onClick={() => window.open("https://github.com/alihasna32", "_blank")}
          className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-2 rounded-md md:flex hidden cursor-pointer"
        >
          <GithubIcon />
          Contribute
        </button>
      </div>
    </div>
  );
};

export default Navbar;
