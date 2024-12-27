import React, { useState } from "react";
import logo from "../assets/Logo_AVIS.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHouse, faHandHoldingDroplet, faEnvelope, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-blue-500 py-8 relative font-sans">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex font-semibold items-center text-xl text-semib hover:scale-110 transition-all">
          <img
            src={logo}
            alt="AVIS Arese"
            className="h-12 "
          />
          <div className="flex flex-col">
            <h1>Comunale</h1>
            <h1>Arese</h1>
          </div>
        </a>
        {/* Menu Hamburger - for small screens */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Social Media Icons - for small screens */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 "
          >
            <FontAwesomeIcon icon={faFacebook} size="xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>
          <button className="text-blue-600 " onClick={toggleMenu}>
            <svg
              className="w-10 h-10 hover:scale-125 transition-all"
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
          <li className="p-4 rounded-md transition-all cursor-pointer hover:scale-125">
            <a href="/">Home</a>
          </li>
          <li className="p-4 rounded-md transition-all cursor-pointer hover:scale-125">
            <a href="#">Chi Siamo</a>
          </li>
          <li className="p-4 rounded-md transition-all cursor-pointer hover:scale-125">
            <a href="#">Donazione</a>
          </li>
          <li className="p-4 rounded-md transition-all cursor-pointer hover:scale-125">
            <a href="/Contatti">Contatti</a>
          </li>
          {/* Social Media Icons */}
          <li className="p-4 flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800 hover:scale-125 transition-all"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 hover:scale-125 transition-all"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </li>
        </ul> 
      </div>

      {/* Mobile Menu */}
      {isOpen ? (
        <div className="md:hidden pt-4 pl-4">
        <ul className="flex flex-col space-y-4">
          <li>
            <a href="/" className="text-blue-600 text-lg">
            <FontAwesomeIcon icon={faHouse} size="lg" className="pr-3"/>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 text-lg">
            <FontAwesomeIcon icon={faPeopleGroup} size="lg" className="pr-2"/>
              Chi Siamo
            </a>
            </li>
          <li>
            <a href="#" className="text-blue-600 text-lg">
            <FontAwesomeIcon icon={faHandHoldingDroplet} size="lg" className="pr-3"/>
              Donazione
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 text-lg">
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="pr-3"/>
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
