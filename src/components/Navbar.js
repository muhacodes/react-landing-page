// Navbar.js
import React, { useState } from "react";
import logo from "../assets/img/company-logo.png";
import Button from "./Button";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  function toggleActive(nav) {
    setActive(nav);
    toggleMenu();
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "services",
      title: "Services",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "team",
      title: "Team",
    },
  ];

  return (
    <nav id="navbar" className="flex flex-col lg:flex-row sticky-nav items-start py-5 gap-5  lg:items-center lg:justify-around bg-white text-black">
      <a className="flex w-5/6 lg:w-auto justify-between lg:mx-0 mx-auto items-center">
        <img src={logo} />
        <span className="pr-5 flex lg:hidden">
          <i onClick={() => toggleMenu()} className="fa fa-bars"></i>
        </span>
      </a>
      {/* <ul className="hidden md:flex md:flex-row items-center gap-10"> */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } w-screen lg:w-fit lg:flex lg:flex-row items-center gap-10`}
      >
        {navLinks.map((nav, index) => (
          <Link
            to={nav.id}
            spy={true}
            smooth={true}
            duration={500} // Adjust the duration as needed
          >
            <li
              key={nav.id}
              className={`${
                active == nav.id ? "bg-red-500  text-white" : ""
              } hover:cursor-pointer hover:bg-red-500 hover:text-white w-screen md:w-auto p-4`}
              onClick={() => toggleActive(nav.id)}
            >
              {nav.title}
            </li>
          </Link>
        ))}
      </ul>

      <button
        className={`${
          isOpen ? "block" : "hidden"
        }  lg:block border text-white p-2 bg-red-700`}
      >
        {" "}
        Contact us today{" "}
      </button>
    </nav>
  );
};

export default Navbar;
