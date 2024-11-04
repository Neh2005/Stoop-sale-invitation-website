// src/components/VideoBackground.js
import React from 'react';
import './Background.css';

const Background = () => {
    return (
        <div className="video-container">
            <video autoPlay muted loop>
                <source src="https://v.ftcdn.net/04/09/07/62/700_F_409076217_QWtlhDQrFnVuO0LfpQ8Ioo7k2LTdHHmX_ST.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Background;
