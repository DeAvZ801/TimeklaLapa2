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
            <a href="https://www.freeconvert.com/video-compressor" target="_blank" rel="noopener noreferrer">Videoklips tika saspiests ar freeconvert.com</a>
            </div>
        </div>
    );
}
export default Video;
