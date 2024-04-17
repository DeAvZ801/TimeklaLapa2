import React, { useState } from 'react';
import './kolonnas.css';
import SvgIcon from '../../media/svg.svg';

function Kolonnas() {
    const [activekolonna, setActivekolonna] = useState(null);

    const togglekolonna = (kolonna) => {

        setActivekolonna(activekolonna === kolonna ? null : kolonna);
    };

    return (
        <div className="section">
            <h2 className="section__title">Energoefektīva tīmekļa izstrāde kā līdzeklis elektrības patēriņa samazināšanai</h2>
            <p className="section__description">
                Šīs pētījums fokusējas uz mūsdienās aktuālo tēmu - energoefektīvu tīmekļa izstrādi izmantojot zināmas “zaļās” tīmekļa
                izstrādes koncepcijas kuru realizācija un analīze palīdzēs izstrādāt un izpētīt ilgtspējīgas un dabai draudzīgas digitālās
                platformas.
            </p>
            <div className="kolonnas">
                {[1, 2, 3].map((kolonna) => (
                    <div key={kolonna} className="kolonna">
                        <img src={SvgIcon} alt={`Ikona kolonnai ${kolonna}`} className="kolonna__icon" />
                        <h3 className="kolonna__title">
                            {kolonna === 1
                                ? "Navigācija vietnē"
                                : kolonna === 2
                                ? "Lietotāja pieredze"
                                : "Optimizācija un efektivitāte"}
                        </h3>
                        {activekolonna === kolonna && (
                            <p className="kolonna__text">
                                {kolonna === 1
                                    ? "Ilgtspējīgās tīmekļa izstrādes pamatā ir tīmekļa dizains, kas no pirmā acu uzmetiena neko ļaunu nespēj izdarīt dabai, bet tas ir cieši saistīts ar enerģijas milzīgu patēriņu."
                                    : kolonna === 2
                                    ? "Mūsdienās tīmekļa izstrādātājiem ir plašas iespējas dinamisko un visādo vizuālo efektu izmantošanai, kas veicina efektīvāku un dabai draudzīgāku tieši tīmekļa izstrādi."
                                    : "Optimizācija un efektivitāte ir svarīgi aspekti ilgtspējīgā tīmekļa izstrādē, veicinot mazāku datu apjomu pārraidi un zemāku enerģijas patēriņu."}
                            </p>
                        )}
                        <button className="kolonna__button" onClick={() => togglekolonna(kolonna)}>
                            {activekolonna === kolonna ? 'Aizvērt Informāciju' : `Parādīt Informāciju`}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Kolonnas;
