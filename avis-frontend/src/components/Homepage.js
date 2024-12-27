import React from "react";
import Navbar from "./Navbar";
const Homepage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Dona il sangue, salva una vita</h2>
          <p className="text-lg mb-8">
            Unisciti a noi per fare la differenza nella vita delle persone.
          </p>
          <a
            href="#donate"
            className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
          >
            Scopri di più
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Chi Siamo</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            AVIS Comunale è un'organizzazione no-profit dedicata a promuovere la
donazione di sangue e a sostenere la comunità locale.
          </p>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="bg-gray-200 py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Come Donare</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Scopri il processo di donazione e prenota la tua visita presso il
nostro centro AVIS.
          </p>
          <a
            href="#"
            className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700"
          >
            Prenota Ora
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">FAQ</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Hai domande sulla donazione di sangue? Trova le risposte alle domande
frequenti.
          </p>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="bg-gray-200 py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Ultime News</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Rimani aggiornato sulle nostre attività ed eventi locali.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 AVIS Comunale. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
