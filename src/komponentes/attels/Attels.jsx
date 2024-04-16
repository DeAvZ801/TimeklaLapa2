import React, { useState } from 'react';
import Lake from '../../media/pamatstudijas.webp';
import './attels.css';

function Attels() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="scroll__image-container">
            <img
                id="image"
                src={Lake}
                alt="Pamatstudiju progrmmas"
                style={{ width: '100%', height: 'auto' }}
                loading="lazy"
                srcSet={`${Lake} 400w, ${Lake} 800w, ${Lake} 1200w`}
                sizes="(max-width: 600px) 100vw, (max-width: 768px) 50vw, 33.3vw"
            />
            <div className="scroll__text-container">
                {showModal && (
                    <div className="modal">
                        <p className="text">
                            RTU fakultātes piedāvā daudzpusīgu tehnisko un inženierzinātņu izglītību.
                            Fakultātēs valda senas un klasiskas augstākās akadēmiskās un profesionālās izglītības
                            tradīcijas, tiek sagatavoti augsti kvalificēti un mūsdienu darba tirgū pieprasīti speciālisti.
                            Studijas notiek arī RTU Rīgas Biznesa skolā un četros reģionālajos centros.
                        </p>

                    </div>
                )}
                <button className='scroll__button' onClick={toggleModal}>Parādīt Informāciju</button>
            </div>
        </div>
    );
}

export default Attels;
