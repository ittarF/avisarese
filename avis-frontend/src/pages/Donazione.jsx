import React from "react";
import AccordionItem from "../components/Accordion";

function Donazione() {
    return (
        <div className="bg-blue-100 py-8">
            {/* DONAZIONE */}
            <AccordionItem className="bg-white shadow-lg rounded-xl text-center ml-8  mr-8"> 
            <h1 className="text-3xl font-bold text-center text-blue-500 mb-8 pt-2 pb-2">
            Chi Può <span className="text-red-500">Donare</span>
            </h1>
            </AccordionItem>

            {/* Donazione - BOX */}
            <AccordionItem title="Chi può donare">
            </AccordionItem>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 justify-center">
                {/* Buona salute */}
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

                {/* ETA */}
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

                {/* PESO */}
                <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-110 transition-all">
                    <div className="flex justify-center mb-4">
                    </div>
                    <h2 className="text-xl font-bold text-red-500">Orari di Apertura</h2>
                    <p className="mt-2 text-gray-700">Mar. 09:00 - 12.30 <br />Gio. 09:00 - 12.30 </p>
                </div>
            </div>
        </div>
    );
}

export default Donazione;