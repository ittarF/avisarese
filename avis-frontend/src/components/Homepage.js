import React from "react";

const Homepage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className='max-w-[1640px] mx-auto overflow-hidden'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg'>
            Dona il <span className='text-red-800'>Sangue</span>,
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg'>
            <span className='text-red-800'>Salva</span> una Vita
          </h1>
        </div>
        <img
          className='w-full max-h-[500px] object-cover'
          src='https://citizenadvocates.net/wp-content/uploads/2024/01/donating-blood_donation-areas-in-New-York_Citizen-Advocates-community-action-850x575.png'
          alt='/'
        />
      </div>
    </div>

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
