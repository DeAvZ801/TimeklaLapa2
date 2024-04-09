import React from "react";
import "./video.css";
import RTUVideo from "../../assets/rtuvid.mp4"; // Make sure this path is correct

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
                Your browser does not support the video tag.
            </video>
            <div className="video-message">
                Skaņa tika noņemta un video saspiests ar palīgrīkiem.
            </div>
        </div>
    );
}

export default Video;
