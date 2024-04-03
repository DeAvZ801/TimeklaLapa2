import React, { useState } from 'react';
import './hero.css';
import Burti from '../../assets/Burti.webp';
import Vestibils from '../../assets/Vestibils.webp';
import Kampuss from '../../assets/Kampuss.webp';
import Svg from '../../assets/static-svg.svg';

function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    const images = [Burti, Vestibils, Kampuss];
    
    return (
        <div className="hero-container">
            <div className="hero-heading">
                <h3>Lorem ipsum dolor sit amet</h3>
                <div className="svg-container">
                    <img src={Svg} alt="SVG 1" className="moving__svg" />
                </div>
            </div>
            <div className="hero-container-button">
                <div className="hero-button">
                    <button className="my-button" onClick={handleButtonClick}>
                        Button
                    </button>
                </div>
            </div>
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
                    Next
                </button>
            </div>
            {showPopup && (
                <div className="popup-container">
                    <div className="popup">
                        <h2>Popup Window</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolores voluptatem velit tempora minus ipsa libero, ut animi sed perspiciatis culpa ipsam similique quae. Voluptatibus illo quia similique! Vero, natus.</p>
                        <button className="popup-close-button" onClick={handlePopupClose}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hero;
