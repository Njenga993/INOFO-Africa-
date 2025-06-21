import React from 'react';
import '../styles/AfricaLoader.css';

const AfricaLoader = () => {
  return (
    <div className="africa-loader-container">
      <div className="africa-loader">

        {/* African Outline */}
        <svg className="africa-outline" viewBox="0 0 500 500">
          <path
            d="M250,120 C300,130 350,150 380,200 C400,250 390,300 370,350 C340,380 300,400 250,390 C200,380 160,350 130,300 C110,250 120,200 150,150 C180,130 220,120 250,120 Z"
            fill="none"
            stroke="#0f5132"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="outline-path"
          />
          {/* Madagascar */}
          <path
            d="M420,350 C430,340 440,345 450,350 C445,360 435,365 425,360 C420,355 415,350 420,350 Z"
            fill="none"
            stroke="#0f5132"
            strokeWidth="2"
            className="outline-path"
          />
        </svg>

        {/* Dots Inside Africa */}
        <div className="center-dots">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </div>
      </div>
      <p className="loader-text">Connecting African Organic Networks...</p>
    </div>
  );
};

export default AfricaLoader;
