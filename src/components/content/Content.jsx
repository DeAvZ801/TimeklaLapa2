import React from "react";
import RTUImage from "../../assets/RTU.webp"; // Ensure this path is correct
import "./content.css";

function Content() {
    return (
        <div className="content__container">
            <div className="flex__container">
                <div className="text__container">
                    <h3>Rīgas Tehniskā universitāte</h3>
                    <p>
                        Rīgas Tehniskā universitāte (RTU) ir vadošā tehniskā augstskola Latvijā un viena no lielākajām Baltijas valstīs, kas nodrošina inženierzinātņu, dabaszinātņu un sociālo zinātņu augstāko izglītību.
                    </p>
                    <p>
                        Ar savu teicamo studiju programmu un pētniecības projektu klāstu, RTU ir ieguvusi starptautisku atzinību, veicinot zināšanu attīstību un tehnoloģisko inovāciju.
                    </p>
                </div>
                <figure className="image__container">
                    <img
                        src={RTUImage}
                        alt="RTU - Rīgas Tehniskā universitāte"
                        loading="lazy"
                    />
                    <figcaption>Rīgas Tehniskā universitāte - viens no vadošajiem tehniskajiem augstskolām Baltijā.</figcaption>
                </figure>
            </div>
        </div>
    );
}

export default Content;
