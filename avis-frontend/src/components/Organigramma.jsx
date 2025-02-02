import React from 'react';

const Organigramma = () => {
  return (
        <table className="min-w-full bg-white rounded-xl">
          <thead>
          <th colSpan="2" className="drop-shadow-lg p-4 text-center text-lg font-semibold">
            ORGANIGRAMMA
          </th>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-300 p-4 align-top">Presidente</td>
              <td className="border-b border-gray-300 p-4">Roberto Abruzzi</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4 align-top">Vice Presidente</td>
              <td className="border-b border-gray-300 p-4">
                Giuliana Barbera <br />
                Alessandro Brambilla
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4 align-top">Tesoriere</td>
              <td className="border-b border-gray-300 p-4">Carlo Serventi</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4 align-top">Segretaria</td>
              <td className="border-b border-gray-300 p-4">Silvia Marchesi</td>
            </tr>
            <tr>
              <td className="border-collapse border-gray-300 p-4 align-top">Consiglieri</td>
              <td className="border-collapse border-gray-300 p-4">
                Giorgio Camozzi<br />
                Claudio Rossato<br />
                Inder Bellini<br />
                Valerio Carsetti<br />
                Francesca Grotto<br />
                Francesco D'Acquaro<br />
                Giovanni Reina<br />
                Angelo Bracchi<br />
                Franco Bruno<br />
              </td>
            </tr>
          </tbody>
        </table>
  );
};

export default Organigramma;
