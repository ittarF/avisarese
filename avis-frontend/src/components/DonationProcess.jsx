import React from 'react';
import { UserPlus, Stethoscope, ClipboardList, GlassWater, Clock, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const DonationSteps = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Iscriviti',
      description: 'Per diventare donatore puoi procedere in due modi:',
      subdescription: [
        'Recarti direttamente in sede presso Via Caduti, 2 Arese',
        'Scaricare il modulo, compilarlo e inviarlo via email all\'indirizzo: iscrizioni@avismonza.it'
      ],
      buttonText: <Link 
      to="/donazione" 
      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
      >
      Requisiti per Poter Donare
      </Link>,
      downloadButton: {
        text: 'Scarica Modulo Iscrizione',
        link: '/documents/modulo_iscrizione_avis.pdf'
      },
      color: 'bg-blue-100 text-blue-800'
      },
    {
      icon: Stethoscope,
      title: 'Visita d\'idoneità',
      description: 'Verrai contattato per prenotare la visita d\'idoneità al centro trasfusionale. Effettuerai un piccolo prelievo di sangue e un elettrocardiogramma.',
      color: 'bg-green-100 text-green-800'
    },
    {
      icon: ClipboardList,
      title: 'Esito',
      description: 'Ti verrà comunicato l\'esito dalla segreteria. Se gli esami sono nella norma, potrai iniziare a donare!',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      icon: GlassWater,
      title: 'Prenota Donazione',
      description: 'Prenota la tua donazione di sangue, plasma o emocomponenti. Il prelievo è effettuato da personale qualificato.',
      buttonText: 'Prenota Donazione',
      color: 'bg-red-100 text-red-800'
    },
    {
      icon: Clock,
      title: 'Dopo la Donazione',
      description: 'Dopo il prelievo ti viene offerta la colazione! Se sei lavoratore dipendente, hai diritto alla giornata di riposo retribuita.',
      color: 'bg-yellow-100 text-yellow-800'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
        Come Diventare Donatore AVIS Arese
      </h2>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-6 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            <div className={`p-4 rounded-full ${step.color}`}>
              <step.icon size={48} className="mx-auto" />
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              {step.subdescription && (
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  {step.subdescription.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              <div className="flex space-x-4">
                {step.buttonText && (
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                    {step.buttonText}
                  </button>
                )}
                {step.downloadButton && (
                <a 
                    href={step.downloadButton.link} 
                    download='modulo_iscrizione_avis_arese' 
                    className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                    <Download className="mr-2" size={20} />
                    {step.downloadButton.text}
                </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationSteps;