import React, { useState } from "react";
import logo from "../assets/Logo_AVIS.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-red-500 text-white py-8 relative rounded-full m-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="AVIS Arese"
          className="h-12 hover:scale-110 transition-all fixed left-0 ml-8"
        />

        {/* Menu Hamburger - for small screens */}
        <div className="md:hidden">
          <button className="text-white fixed right-8 top-8" onClick={toggleMenu}>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center font-semibold text-lg absolute right-4 top-1/2 transform -translate-y-1/2`}
        >
          <li className="p-4 hover:bg-blue-600 rounded-md transition-all cursor-pointer">
            <a href="#">Home</a>
          </li>
          <li className="p-4 hover:bg-blue-600 rounded-md transition-all cursor-pointer">
            <a href="#">Chi Siamo</a>
          </li>
          <li className="p-4 hover:bg-blue-600 rounded-md transition-all cursor-pointer">
            <a href="#">Donazione</a>
          </li>
          <li className="p-4 hover:bg-blue-600 rounded-md transition-all cursor-pointer">
            <a href="#">Contatti</a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen ? (
        <div className="md:hidden">
        <ul className="flex flex-col space-y-4 absolute right-0 left-0 bg-red-500 p-4 top-20 z-10 shadow-lg">
          <li>
            <a href="#" className="text-white text-lg">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-lg">
              Chi Siamo
            </a>
            </li>
          <li>
            <a href="#" className="text-white text-lg">
              Donazione
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-lg">
              Contatti
            </a>
          </li>
        </ul>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;
