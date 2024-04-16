import React from "react";
import "./video.css";
import RTUVideo from "../../media/rtuvid.mp4";
function Video() {
    return (
        <div className="video__container">
            <video
                src={RTUVideo}
                controls
                muted
                width="100%"
                height="auto"
                loading="lazy"
            >
                <source src={RTUVideo} type="video/mp4" />
                Jūsu pārlūkprogramma neatbalsta video tagu.
            </video>
            <div className="video-message">
                Skaņa tika noņemta un video saspiests ar palīgrīkiem.
            </div>
        </div>
    );
}
export default Video;
