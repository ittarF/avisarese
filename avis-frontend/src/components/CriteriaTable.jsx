import React from 'react';

const CriteriaTable = () => {
  return (
    <div className="p-4">
      <div className="">
        <p>
          Il criterio più generale afferma che <strong>chiunque abbia 18 anni compiuti, almeno 50 kg di peso e goda di buona salute</strong> può donare il sangue. Ovviamente lo stato di buona salute è un concetto molto ampio, che va indagato in modo più specifico, dal punto di vista medico.
        </p>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-gray-100 rounded-xl">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 p-4 text-left">Caratteristica</th>
              <th className="border-b-2 border-gray-300 p-4 text-left">Criterio di accettabilità</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-300 p-4">Età</td>
              <td className="border-b border-gray-300 p-4">
                18-60 anni (per l'aspirante donatore)<br />
                18-65 anni (per il donatore periodico)<br />
                Oltre 65 e fino ai 70 anni (solo previa valutazione clinica)
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Peso</td>
              <td className="border-b border-gray-300 p-4">Almeno 50 kg</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">SSN</td>
              <td className="border-b border-gray-300 p-4">Occorre essere iscritti al Sistema Sanitario Nazionale (con Tessera Sanitaria italiana)</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Polso (frequenza cardiaca)</td>
              <td className="border-b border-gray-300 p-4">
                50-100 battiti al minuto, ritmico e regolare<br />
                I donatori che effettuano attività sportiva agonistica o intensa possono essere accettati anche con valori più bassi
              </td>
            </tr>
            <tr>
              <td className="border-collapse border-gray-300 p-4">Pressione arteriosa</td>
              <td className="border-collapse border-gray-300 p-4">
                Sistolica: ≤ 180 mmHg<br />
                Diastolica: ≤ 100 mmHg
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CriteriaTable;
