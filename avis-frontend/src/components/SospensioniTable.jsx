import React from 'react';

const SospensioniTable = () => {
  return (
    <div className="p-4">
      <div className="">
        <p>
            Esistono una serie di <strong>situazioni mediche, farmacologiche o episodico/fattuali</strong> che renderebbero la donazione non sicura o pericolosa, per il donatore e per il ricevente, e per cui si applicano delle <strong>misure di sospensione temporanea</strong>. < br />
            
        </p>
      </div>
      <div className="overflow-x-auto mt-4">
        {/* CONDIZIONI DI SALUTE */}
        <table className="min-w-full bg-gray-100 rounded-t-xl overflow-y-auto mb-8">
          <thead>
            <p className="text-center text-2xl font-bold py-8">Condizioni di Salute</p>
            <tr>
              <th className="border-b-2 border-gray-300 p-4 text-left">Motivo</th>
              <th className="border-b-2 border-gray-300 p-4 text-left">Durata della sospensione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-300 p-4">Febbre superiore a 38 °C</td>
              <td className="border-b border-gray-300 p-4">14 giorni dopo la cessazione dei sintomi</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Raffreddore, influenza, faringite, Herpes labiale, sinusite, otite (non complicata), cistite</td>
              <td className="border-b border-gray-300 p-4">14 giorni dopo la cessazione dei sintomi o dopo la cessazione di terapia antibiotica</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Ciclo mestruale</td>
              <td className="border-b border-gray-300 p-4">Dal giorno di inizio fino a 7 giorni dopo il termine delle mestruazioni</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Gravidanza</td>
              <td className="border-b border-gray-300 p-4">Riammissione dopo 6 mesi dal termine (previa valutazione medica). Ulteriori 6 mesi terminato l'allattamento.</td>
            </tr>
            <tr>
              <td className="border-collapse border-gray-300 p-4">Ipertensione arteriosa</td>
              <td className="border-collapse p-4"><i>Contattare il medico AVIS</i> </td>
            </tr>
          </tbody>
          {/* Interventi chirurgici ed odontoiatrici */}
          <thead>
            <p className="text-center text-2xl font-bold py-8">Interventi chirurgici ed odontoiatrici</p>
            <tr>
              <th className="border-b-2 border-gray-300 p-4 text-left">Motivo</th>
              <th className="border-b-2 border-gray-300 p-4 text-left">Durata dellla sospensione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-300 p-4">Intervento chirurgico minore (di superficie, asportazione di verruche)</td>
              <td className="border-b border-gray-300 p-4">15 giorni dalla completa e accertata guarigione della ferita
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Asportazione di nei	</td>
              <td className="border-b border-gray-300 p-4">7 giorni dalla completa e accertata guarigione della ferita (portare esame istologico con esito negativo per neoplasie)
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Intervento chirurgico maggiore	</td>
              <td className="border-b border-gray-300 p-4">4 mesi dall'intervento (previa valutazione clinica e recupero dello stato di salute)
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Accertamenti endoscopici con strumenti flessibili (artroscopia, colonscopia, gastroscopia, laparoscopia, laringoscopia)	</td>
              <td className="border-b border-gray-300 p-4">4 mesi dall'intervento</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Igiene orale o cure odontoiatr. di minore entità</td>
              <td className="border-b p-4">48 ore</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Estrazioni dentarie, impiantologie, devitalizzaz.</td>
              <td className="border-b p-4">1 settimana dalla completa guarigione clinica</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Innesto di tessuto osseo autologo o omologo</td>
              <td className="border-b p-4">4 mesi dall'intervento</td>
            </tr>
          </tbody>
          {/* Malattie o condizioni particolari */}
          <thead>
            <p className="text-center text-2xl font-bold py-8">Malattie o condizioni particolari</p>
            <tr>
              <th className="border-b-2 border-gray-300 p-4 text-left">Motivo</th>
              <th className="border-b-2 border-gray-300 p-4 text-left">Durata della sospensione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-300 p-4">Diabete mellito</td>
              <td className="border-b border-gray-300 p-4"><i>Contattare il medico AVIS</i> (sono esclusi soggetti in trattamento con insulina; possono essere accettati soggetti con diabete compensato dopo valutazione medica)
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Neoplasie maligne (nella storia clinica o in atto)</td>
              <td className="border-b border-gray-300 p-4">Sospensione permanente
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Malattie infettive (Epatite B, Epatite C, infezione da HIV, infezione da HTLV I/II, Sifilide, Febbre Q cronica)	</td>
              <td className="border-b border-gray-300 p-4">Sospensione permanente
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Malattie autoimmuni (patologie tiroidee, cutanee, gastroent.)</td>
              <td className="border-b border-gray-300 p-4"><i>Contattare il medico AVIS</i></td>
            </tr>
            <tr>
              <td className="border-collapse border-gray-300 p-4">Malattie croniche</td>
              <td className="border-collapse p-4"><i>Contattare il medico AVIS</i></td>
            </tr>
            <tr>
              <td className="border-collapse border-gray-300 p-4">Trasfusioni di emocompon. o somministraz. di emoderivati</td>
              <td className="border-collapse p-4">4 mesi dall'ultima esposizione al rischio</td>
            </tr>
            <tr>
              <td className="border-collapse border-gray-300 p-4">Trapianto di tessuti, cellule, organo solido</td>
              <td className="border-collapse p-4">Sospensione permanente</td>
            </tr>
          </tbody>
          {/* Allergie e uso di farmaci */}
          <thead>
            <p className="text-center text-2xl font-bold py-8">Allergie e uso di farmaci</p>
            <tr>
              <th className="border-b-2 border-gray-300 p-4 text-left">Motivo</th>
              <th className="border-b-2 border-gray-300 p-4 text-left">Durata della sospensione</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td className="border-b border-gray-300 p-4">Assunzione di farmaci</td>
              <td className="border-b border-gray-300 p-4"><i>Contattare il medico AVIS</i> (per alcuni farmaci sono previste sospensioni temporanee o permanenti)
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Manifestaz. allergiche gravi a farmaci, sostanze o veleno di imenotteri; allergeni ambientali, stagionali, alimentari</td>
              <td className="border-b border-gray-300 p-4">
              2 mesi dall'ultimo episodio < br />
              Sospensione permanente, se vi è stato episodio di shock anafilattico
              </td>
            </tr>
          </tbody>
          <thead>
            <p className="text-center text-2xl font-bold py-8">Malattie o condizioni particolari</p>
            <tr>
              <th className="border-b-2 border-gray-300 p-4 text-left">Motivo</th>
              <th className="border-b-2 border-gray-300 p-4 text-left">Durata della sospensione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-300 p-4">Diabete mellito</td>
              <td className="border-b border-gray-300 p-4"><i>Contattare il medico AVIS</i> (sono esclusi soggetti in trattamento con insulina; possono essere accettati soggetti con diabete compensato dopo valutazione medica)
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Neoplasie maligne (nella storia clinica o in atto)</td>
              <td className="border-b border-gray-300 p-4">Sospensione permanente
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Malattie infettive (Epatite B, Epatite C, infezione da HIV, infezione da HTLV I/II, Sifilide, Febbre Q cronica)	</td>
              <td className="border-b border-gray-300 p-4">Sospensione permanente
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Malattie autoimmuni (patologie tiroidee, cutanee, gastroent.)</td>
              <td className="border-b border-gray-300 p-4"><i>Contattare il medico AVIS</i></td>
            </tr>
            <tr>
              <td className="border-collapse border-gray-300 p-4">Malattie croniche</td>
              <td className="border-collapse p-4"><i>Contattare il medico AVIS</i></td>
            </tr>
            <tr>
              <td className="border-collapse border-gray-300 p-4">Trasfusioni di emocompon. o somministraz. di emoderivati</td>
              <td className="border-collapse p-4">4 mesi dall'ultima esposizione al rischio</td>
            </tr>
            <tr>
              <td className="border-collapse border-gray-300 p-4">Trapianto di tessuti, cellule, organo solido</td>
              <td className="border-collapse p-4">Sospensione permanente</td>
            </tr>
          </tbody>
          {/* Condizioni di rischio */}
          <thead>
            <p className="text-center text-2xl font-bold py-8">Condizioni di rischio</p>
            <tr>
              <th className="border-b-2 border-gray-300 p-4 text-left">Motivo</th>
              <th className="border-b-2 border-gray-300 p-4 text-left">Durata della sospensione</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td className="border-b border-gray-300 p-4">Agopuntura (se non eseguita da professionisti qualificati con ago usa e getta)</td>
              <td className="border-b border-gray-300 p-4">4 mesi dall'ultima esposizione al rischio
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Tatuaggi, body piercing, foratura a lobi/narici</td>
              <td className="border-b border-gray-300 p-4">4 mesi dall'ultima esposizione al rischio
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Puntura accidentale con aghi, spruzzo delle mucose con sangue, contatto con materiale potenzialmente infetto</td>
              <td className="border-b border-gray-300 p-4">4 mesi dall'ultima esposizione al rischio < br />
              1 anno, se vi è il sospetto di materiale proveniente da soggetto con rischio di sifilide 
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Convivenza occasionale o prolungata con soggetti (non partner sessuali) con Epatite B (positività per HBsAg) e/o Epatite C (HCV)</td>
              <td className="border-b border-gray-300 p-4">4 mesi dopo la cessazione della convivenza (anche se il donatore è vaccinato per l'Epatite B)
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">
                Comportamenti sessuali a rischio: cambio di partner negli ultimi 4 mesi, rapporto (etero/ omosessuale): <br />
                * con partner risultato positivo ai test per Epatite B e/o C e/o per l'AIDS o a rischio di esserlo <br />
                * con partner che ha avuto precedenti comportam. sessuali a rischio o del quale il donatore ignora le abitudini sessuali <br />
                * con partner occasionale <br />
                * con più partner sessuali <br />
                * con soggetti tossico-dipendenti <br />
                * con scambio di denaro o droga <br />
                * con partner, di cui non sia noto lo stato sierologico, nato o proveniente da Paesi esteri dove l'AIDS è una malattia diffusa
              </td>
              <td className="border-b border-gray-300 p-4">4 mesi dall'ultima esposizione al rischio
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Alcolismo cronico</td>
              <td className="border-b border-gray-300 p-4">Sospensione permanente
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Uso di droghe</td>
              <td className="border-b border-gray-300 p-4">	Contattare il medico AVIS (esclusione permanente per i soggetti con uso attuale o pregresso non prescritto di farmaci o principi attivi, comprese sostanze stupefacenti, steroidi od ormoni a scopo di attività sportive, per via intramuscolo, endovena o tramite strumenti in grado di trasmettere malattie infettive) < br />
              In caso di droghe minori (hascisc, marijuana) assunte occasionalmente in passato, devono passare almeno 6 mesi dall'ultima assunzione
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Viaggi all'estero</td>
              <td className="border-b border-gray-300 p-4">Consultare il <a href='https://inviaggio.simti.it/'> sito "Il Donatore che Viaggia</a> o contattare la sede AVIS
              </td>
            </tr>
          </tbody>
          {/* Vaccinazioni */}
          <thead>
            <p className="text-center text-2xl font-bold py-8">Vaccinazioni</p>
            <tr>
              <th className="border-b-2 border-gray-300 p-4 text-left">Motivo</th>
              <th className="border-b-2 border-gray-300 p-4 text-left">Durata della sospensione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-300 p-4">Vaccino per Covid-19</td>
              <td className="border-b border-gray-300 p-4">
                48 ore (se il soggetto è asintomatico) < br />
                7 giorni dopo il termine di eventuali sintomi
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Vaccini con virus uccisi o batteri inattivati: influenza, Epatite A, pertosse, poliomielite (per iniezione)</td>
              <td className="border-b border-gray-300 p-4">48 ore (se il soggetto è asintomatico)
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Vaccini tossoidi (antitetanici, antidifterici)</td>
              <td className="border-b border-gray-300 p-4">48 ore
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-4">Vaccini con virus o batteri vivi attenuati: rosolia, parotite, moribillo, poliomielite (per via orale)</td>
              <td className="border-b border-gray-300 p-4">4 settimane</td>
            </tr>
            <tr>
              <td className="border-collapse border-gray-300 p-4">Vaccini per l'Epatite B</td>
              <td className="border-collapse p-4">	7 giorni (se il soggetto è asintomatico e non vi è stata esposizione)</td>
            </tr>
            <tr>
              <td className="border-collapse border-gray-300 p-4">Vaccino per la rabbia</td>
              <td className="border-collapse p-4">
                48 ore (se il soggetto è asintomatico e non vi è stata esposizione) < br />
                1 anno (se il vaccino è stato somministrato dopo l'esposizione)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SospensioniTable;
