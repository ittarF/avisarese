import React from "react";
import Map from "./Map";

function Contatti() {

    return (
    <div className="bg-blue-100 py-8">
        {/* Titolo */}
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">
        I nostri <span className="text-red-500">contatti</span>
        </h1>

        {/* Box informativi */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 justify-center">
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
