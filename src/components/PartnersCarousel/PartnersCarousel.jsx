import React from "react";
import "./PartnersCarousel.css";

// Example logos — replace with your own image imports
import logo1 from "../../assets/everjoy.png";
import logo2 from "../../assets/genzarea.png";
import logo3 from "../../assets/athenacm.png";
import leftIcon from "../../assets/left-icon.png";
import rightIcon from "../../assets/right-icon.png";

const logos = [logo1, logo2, logo3];

const PartnersCarousel = () => {
  return (
    <div className="partners-section">
      <button className="partner-arrow left">
        <img src={leftIcon} className="partner-arrow-icon" alt="Left Arrow" />
      </button>

      <div className="partners-slider">
        {logos.map((logo, i) => (
          <div key={i} className={`slide slide-${i}`}>
            <img src={logo} alt={`Partner ${i + 1}`} />
          </div>
        ))}
      </div>

      <button className="partner-arrow right">
        <img src={rightIcon} className="partner-arrow-icon" alt="Right Arrow" />
      </button>
    </div>
  );
};

export default PartnersCarousel;
