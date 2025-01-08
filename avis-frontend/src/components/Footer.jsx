import React from "react";
import logo from "../assets/Logo_AVIS.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-red-600 text-white">
            <div className="flex font-semibold text-sm items-center justify-center">
                <div className="text-center">
                    <img
                        src={logo}
                        alt="AVIS Arese"
                        className="h-8 mx-auto"
                    />
                </div>
                <div className="flex flex-col">
                    <h1>Comunale</h1>
                    <h1>Arese ODV</h1>
                </div>
                <div className="text-center pl-8">
                    <p><FontAwesomeIcon icon={faPhone} size="sm" /> +39 345 362 0799 - <FontAwesomeIcon icon={faEnvelope} size="sm" /> avis.arese@gmail.com</p>
                </div>
            </div>
        </footer>
    );
}

        
  export default Footer;
  