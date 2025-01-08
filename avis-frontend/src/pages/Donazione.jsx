import React from "react";
import AccordionItem from "../components/Accordion";
import Salute from "../assets/Salute.png";
import Eta from "../assets/eta.png";
import Peso from "../assets/peso.png";
import CriteriaTable from "../components/CriteriaTable";
import FreqTable from "../components/FreqTable";
import SospensioniTable from "../components/SospensioniTable";
import PageWrapper from "../components/PageWrapper";

function Donazione() {
    return (
        <PageWrapper>
        <div className="bg-blue-100 py-8 min-h-screen">
            {/* DONAZIONE */}
            <div className="bg-white shadow-lg rounded-xl text-center ml-8  mr-8"> 
                <h1 className="text-3xl font-bold text-center text-blue-500 mb-8 pt-2 pb-2">
                Chi può <span className="text-red-500">Donare</span>
                </h1>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 justify-center mb-8">
                {/* Buona salute */}
                <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-110 transition-all">
                    <div className="flex justify-center mb-4">
                    <img
                        src={Salute}
                        className="h-20 w-20"
                        alt="salute"
                    />
                    </div>
                    <h2 className="text-xl font-bold text-red-500">Essere in <span className="text-blue-500">buona</span> salute</h2>
                </div>

                {/* ETA */}
                <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-110 transition-all">
                    <div className="flex justify-center mb-4">
                    <img
                        src={Eta}
                        alt="età"
                        className="h-20 w-20"
                    />
                    </div>
                    <h2 className="text-xl font-bold text-red-500">Avere un’<span className="text-blue-500">età</span> compresa tra <span className="text-blue-500">18 e 65 anni</span> (60 per il primo accesso)</h2>
                </div>

                {/* PESO */}
                <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-110 transition-all">
                    <div className="flex justify-center mb-4">
                    <img
                        src={Peso}
                        alt="peso"
                        className="h-20 w-20"
                    />
                    </div>
                    <h2 className="text-xl font-bold text-red-500">Avere un peso corporeo non inferiore a 50 Kg</h2>
                </div>
            </div>         

            {/* Donazione - ACCORDION */}
            <AccordionItem title="Criteri generali di accettazione">
                <CriteriaTable />
            </AccordionItem>
            <AccordionItem title="Frequenza delle donazioni">
                <FreqTable />
            </AccordionItem>    
            <AccordionItem title="Sospensioni temporanee dalla donazione">
                <SospensioniTable />
            </AccordionItem>
        </div>
        </PageWrapper>
    );
}

export default Donazione;