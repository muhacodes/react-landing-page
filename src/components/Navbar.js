// Navbar.js
import React, { useState } from "react";
import logo from "../assets/img/company-logo.png";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  function toggleActive(nav) {
    console.log(nav);
    setActive(nav);
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
      id: "features",
      title: "Features",
    },
    {
      id: "product",
      title: "Product",
    },
    {
      id: "clients",
      title: "Clients",
    },
  ];

  return (
    <nav className="flex flex-col lg:flex-row items-start py-5 gap-5  md:items-center md:justify-around bg-white text-black">
      <a className="flex w-5/6 lg:w-auto justify-between lg:mx-0 mx-auto items-center">
        <img src={logo} />
        <span className="pr-5 flex lg:hidden">
        <i onClick={() => toggleMenu() } className="fa fa-bars"></i>
        </span>
      </a>
{/* <ul className="hidden md:flex md:flex-row items-center gap-10"> */}
      <ul className={`${isOpen ? 'block' : 'hidden duration-75'} duration-75 lg:flex lg:flex-row items-center gap-10`}>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`${active == nav.id ? 'bg-red-500  text-white' : ''} hover:cursor-pointer hover:bg-red-500 hover:text-white w-screen md:w-auto p-4`}
            onClick={() => toggleActive(nav.id)}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      <button className={`${isOpen ? 'block' : 'hidden'}  lg:block border text-white p-2 bg-red-700`}> Contact us today </button>
    </nav>
  );
};

export default Navbar;
