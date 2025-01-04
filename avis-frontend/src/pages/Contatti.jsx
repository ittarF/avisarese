import React from "react";
import Map from "../components/Map";
import schedIcon from "../assets/schedule.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contatti() {

    return (
    <div className="bg-blue-100 py-8">
        {/* I Nostri Contatti */}
        <div className="bg-white shadow-lg rounded-xl text-center ml-8  mr-8"> 
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-8 pt-2 pb-2">
        I Nostri <span className="text-red-500">Contatti</span>
        </h1>
        </div>
        {/* Box informativi */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 justify-center">
        {/* Dove siamo */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-110 transition-all">
            <div className="flex justify-center mb-4">
            <img
                src="https://i0.wp.com/www.avismonza.it/wp-content/uploads/2022/02/Contatti_Dove-1.png?fit=121%2C130&ssl=1" 
                className="h-20 w-20"
            />
            </div>
            <h2 className="text-xl font-bold text-red-500">Dove siamo</h2>
            <p className="mt-2 text-gray-700">Via Caduti, 2<br />20044 Arese (MI)</p>
        </div>

        {/* Contattaci */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-110 transition-all">
            <div className="flex justify-center mb-4">
            <img
                src="https://i0.wp.com/www.avismonza.it/wp-content/uploads/2022/02/Contatti_Telefono-1.png?fit=121%2C130&ssl=1"
                alt="Contattaci"
                className="h-20 w-20"
            />
            </div>
            <h2 className="text-xl font-bold text-red-500">Contattaci</h2>
            <p className="mt-2 text-gray-700">
            +39 345 362 0799<br />
            avis.arese@gmail.com
            </p>
        </div>
        {/* Orari di Apertura */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-110 transition-all">
            <div className="flex justify-center mb-4">
            <img
                src={schedIcon} 
                className="h-20 w-20"
            />
            </div>
            <h2 className="text-xl font-bold text-red-500">Orari di Apertura</h2>
            <p className="mt-2 text-gray-700">Mar. 09:00 - 12.30 <br />Gio. 09:00 - 12.30 </p>
        </div>
        </div>

        {/* Centri Trasfusionali */}
        <div className="bg-white shadow-lg rounded-xl text-center ml-8  mr-8"> 
        <h1 className="text-3xl font-bold text-center text-blue-500 mt-8 mb-8 pt-2 pb-2">
        Centri <span className="text-red-500">Trasfusionali</span>
        </h1>
        </div>
        {/* Box informativi */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 justify-center">
        {/* Dove siamo */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-110 transition-all">
            <div className="flex justify-center mb-4">
            <img
                src="https://i0.wp.com/www.avismonza.it/wp-content/uploads/2022/02/Contatti_Orario-1.png?fit=121%2C130&ssl=1" 
                className="h-20 w-20"
            />
            </div>
            <h2 className="text-xl font-bold text-red-500">Ospedale Sacco</h2>
            <p className="mt-2 text-gray-700">Via G.B. Grassi, 74<br />20157 Milano (MI)</p>
            <p className="mt-2 text-gray-700"><FontAwesomeIcon icon={faPhone} size="sm" /> 02 3904 2028 - 02 3904 2934</p>
            <p className="mt-2 text-gray-700"><FontAwesomeIcon icon={faClock} size="sm" /> Orari</p>
            <p className="mt-2 text-gray-700">Lun. 09:00 - 11:30</p>
            <p className="mt-2 text-gray-700">Mar. 09:00 - 11:30</p>
            <p className="mt-2 text-gray-700">Mer. 09:00 - 11:30</p>
            <p className="mt-2 text-gray-700">Gio. 09:00 - 11:30</p>
            <p className="mt-2 text-gray-700">Ven. 09:00 - 11:30</p>
            <p className="mt-2 text-gray-700">Sab. 09:00 - 11:30</p>

        </div>

        {/* Contattaci */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-110 transition-all">
            <div className="flex justify-center mb-4">
            <img
                src="https://i0.wp.com/www.avismonza.it/wp-content/uploads/2022/02/Contatti_Orario-1.png?fit=121%2C130&ssl=1"
                alt="Centro Transfusionale"
                className="h-20 w-20"
            />
            </div>
            <h2 className="text-xl font-bold text-red-500">Centro Trasfusionale "Formentano"</h2>
            <p className="mt-2 text-gray-700">Via Bonaparte, 2<br />20812 Limbiate (MB)</p>
            <p className="mt-2 text-gray-700"><FontAwesomeIcon icon={faPhone} size="sm" /> 02 996 7731</p>
            <p className="mt-2 text-gray-700"><FontAwesomeIcon icon={faClock} size="sm" /> Orari</p>
            <p className="mt-2 text-gray-700">Lun. 07:00 - 11:00</p>
            <p className="mt-2 text-gray-700">Gio. 07:00 - 11:00</p>
            <p className="mt-2 text-gray-700">Ven. 07:00 - 11:00</p>
            <p className="mt-2 text-gray-700">Sab. 07:00 - 11:00</p>
            <p className="mt-2 text-gray-700">Dom. 07:00 - 11:00</p>
        </div>
        </div>

        {/* Pulsante e mappa */}
        <div className="mt-12 text-center">
        <a
            href="https://maps.app.goo.gl/ZhAs98oFgrUJxYmd8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-500 text-white font-bold py-2 px-6 rounded-xl hover:bg-red-600"
        >
            Trovaci su Google Maps
        </a>
        </div>

        {/* Mappa */}
        <Map />

    </div>
    );
}
    
    export default Contatti;
