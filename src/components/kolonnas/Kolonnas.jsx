import React from 'react';
import './kolonnas.css'; 
import SvgIcon from '../../assets/svg.svg';
function Kolonnas() {
    return (
        <div className="section">
            <h2 className="section__title">Energoefektīva tīmekļa izstrāde kā līdzeklis elektrības patēriņa samazināšanai</h2>
            <p className="section__description">Šīs pētījums fokusējas uz mūsdienās aktuālo tēmu - energoefektīvu tīmekļa izstrādi izmantojot zināmas “zaļās” tīmekļa izstrādes koncepcijas kuru realizācija un analīze palīdzēs izstrādāt un izpētīt ilgtspējīgas un dabai draudzīgas digitālās platformas.</p>
            <div className="columns">
                <div className="column">
                    <img src={SvgIcon} alt="Navigācija vietnē" className="column__icon" />
                    <h3 className="column__title">Navigācija vietnē</h3>
                    <p className="column__text">Ilgtspējīgās tīmekļa izstrādes pamatā ir tīmekļa dizains, kas no pirmā acu uzmetiena neko ļaunu nespēj izdarīt dabai, bet tas ir cieši saistīts ar enerģijas milzīgu patēriņu.</p>
                    <button className="column__button">poga 1</button>
                </div>
                <div className="column">
                    <img src={SvgIcon} alt="Lietotāja pieredze" className="column__icon" />
                    <h3 className="column__title">Lietotāja pieredze</h3>
                    <p className="column__text">Mūsdienās tīmekļa izstrādātājiem ir plašas iespējas dinamisko un visādo vizuālo efektu izmantošanai, kas veicina efektīvāku un dabai draudzīgāku tieši tīmekļa izstrādi.</p>
                    <button className="column__button">poga 2</button>
                </div>
                <div className="column">
                    <img src={SvgIcon} alt="Optimizācija un efektivitāte" className="column__icon" />
                    <h3 className="column__title">Optimizācija un efektivitāte</h3>
                    <p className="column__text">Optimizācija un efektivitāte ir svarīgi aspekti ilgtspējīgā tīmekļa izstrādē, veicinot mazāku datu apjomu pārraidi un zemāku enerģijas patēriņu.</p>
                    <button className="column__button">poga 3</button>
                </div>
            </div>
        </div>
    );
}

export default Kolonnas;
