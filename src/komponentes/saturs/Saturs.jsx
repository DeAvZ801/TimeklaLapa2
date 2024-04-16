import React from "react";
import RTUImage from "../../media/RTU.webp"; 
import "./saturs.css";

function Saturs() {
    return (
        <div className="content__container">
            <div className="top__container">
                <figure className="image__container">
                    <img
                        src={RTUImage}
                        alt="RTU - Rīgas Tehniskā universitāte"
                        loading="lazy"
                    />
                    <figcaption>
                        <a href="https://cloudconvert.com" target="_blank" rel="noopener noreferrer">Fails tika saspiests ar cloudconvert.com</a>
                    </figcaption>
                </figure>
            </div>
            <div className="text__container">
                <h3>Rīgas Tehniskā universitāte</h3>
                <p>
                    Rīgas Tehniskā universitāte (RTU) ir vadošā tehniskā augstskola Latvijā un viena no lielākajām Baltijas valstīs, kas nodrošina inženierzinātņu, dabaszinātņu un sociālo zinātņu augstāko izglītību.
                </p>
                <p>
                    Ar savu teicamo studiju programmu un pētniecības projektu klāstu, RTU ir ieguvusi starptautisku atzinību, veicinot zināšanu attīstību un tehnoloģisko inovāciju.
                </p>
            </div>
        </div>
    );
}

export default Saturs;
