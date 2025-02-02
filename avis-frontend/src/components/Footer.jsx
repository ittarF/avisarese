import React from "react";
import logo from "../assets/Logo_AVIS.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-gray-300 p-6 text-sm">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h3 className="text-white font-bold">Contatti</h3>
          <p>Cell: +39 345 362 0799</p>
          <p>Mail: <a href="mailto:aavis.arese@gmail.com" className="text-blue-400">avis.arese@gmail.com</a></p>
        </div>
        <div>
          <h3 className="text-white font-bold">Dove siamo</h3>
          <p>Via Caduti, 2</p>
          <p>20044 Arese</p>
        </div>
        <div>
          <h3 className="text-white font-bold">Orari apertura Sede</h3>
          <p>Martedì: 09.00 - 12.30</p>
          <p>Giovedì: 09.00 - 12.30</p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6 border-t border-white pt-4">
        <img src={logo} alt="Logo AVIS" className="w-24" />
        <p className="flex-1 text-center">PRIVACY POLICY E INFORMATIVE</p>
      </div>
    </footer>
  );
};

export default Footer;

  