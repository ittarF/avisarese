import React from 'react';

const FreqTable = () => {
  return (
    <div className="p-4">
      <div className="">
        <p>
          Per preservare la salute del donatore e la qualità del prodotto, vi sono delle indicazioni rigorose riguardo al <strong>periodo che deve intercorrere (per legge) tra una donazione e la successiva.</strong> <br />
          Non può essere superato il <strong>numero massimo di 4 donazioni</strong> di sangue intero e di <strong>6 piastrinoaferesi</strong> nel corso dell'anno.
        </p>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-gray-100 rounded-xl">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 p-4 text-left">Donazioni Consecutive</th>
              <th className="border-b-2 border-gray-300 p-4 text-left">Intervallo Minimo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-300 p-4">Sangue intero → sangue intero</td>
              <td className="border-b border-gray-300 p-4">
                90 giorni (3 mesi) per gli uomini<br />
                180 giorni (6 mesi) per le donne in età fertile<br />
                90 giorni (3 mesi) per le donne in menopausa
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Sangue intero → plasma</td>
              <td className="border-b border-gray-300 p-4">30 giorni</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Sangue intero → piastrine</td>
              <td className="border-b border-gray-300 p-4">30 giorni</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Plasma → sangue intero</td>
              <td className="border-b border-gray-300 p-4">14 giorni</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Plasma → plasma</td>
              <td className="border-b border-gray-300 p-4">14 giorni</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Plasma → piastrine</td>
              <td className="border-b border-gray-300 p-4">14 giorni</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Piastrine → sangue intero</td>
              <td className="border-b border-gray-300 p-4">14 giorni</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Piastrine → plasma</td>
              <td className="border-b border-gray-300 p-4">30 giorni</td>
            </tr>
            <tr>
              <td className="border-collapse border-gray-300 p-4">Piastrine → piastrine</td>
              <td className="border-collapse border-gray-300 p-4">14 giorni</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FreqTable;
