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
              <td className="border-b border-gray-300 p-4">Barbera C. Giuliana</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4 align-top">Vice presidente</td>
              <td className="border-b border-gray-300 p-4"> Abruzzi Roberto </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4 align-top">Vice presidente vicario</td>
              <td className="border-b border-gray-300 p-4"> Tuttolomondo Anneliese </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4 align-top">Tesoriere</td>
              <td className="border-b border-gray-300 p-4">Germano Carmela</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4 align-top">Segretaria</td>
              <td className="border-b border-gray-300 p-4">Cicognini Vittoria</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4 align-top">Consiglieri</td>
              <td className="border-b border-gray-300 p-4">
                Grotto Francesca<br />
                D'Acquaro Francesco
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4 align-top">Addetto contabile e bilancio</td>
              <td className="border-b border-gray-300 p-4">Serventi Carlo</td>
            </tr>
          </tbody>
        </table>
  );
};

export default Organigramma;
