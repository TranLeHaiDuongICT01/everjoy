import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left section: Logo + text */}
        <div className="footer-left">
          <img src={logo} alt="Everjoy Global" className="footer-logo" />
        </div>

        {/* Middle section: About info */}
        <div className="footer-about">
          <h3>ABOUT US</h3>
          <p>
            <strong>Address:</strong> 1001 Queen Anne Ave N, Apt 201, Seattle WA
            98109, USA
          </p>
          <p>
            <strong>For work:</strong> (+84) 832221888 (Ms. Claire Ton)
          </p>
          <p>
            <strong>Email:</strong> contact@everjoyglobal.com
          </p>
        </div>
      </div>
      <div className="footer-social">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>

      <div className="footer-bottom">
        <p>©2025 Everjoy Global</p>
      </div>
    </footer>
  );
};

export default Footer;
