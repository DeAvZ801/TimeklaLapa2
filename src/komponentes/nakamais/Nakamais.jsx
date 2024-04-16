import React, { useState } from 'react';
import './nakamais.css';
import Burti from '../../media/Burti.webp';
import Vestibils from '../../media/Vestibils.webp';
import Kampuss from '../../media/Kampuss.webp';

function Nakamais() {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [Burti, Vestibils, Kampuss];
    
    return (
        <div className="hero-container">
           
            <div className="hero-gallery">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className={activeIndex === index ? "active" : ""}
                        loading="lazy"
                    />
                ))}
                <button
                    className="next-button"
                    onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
                >
                    Nākamais
                </button>
            </div>
            
        </div>
    );
}

export default Nakamais;
