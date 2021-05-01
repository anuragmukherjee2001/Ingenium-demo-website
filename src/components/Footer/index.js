import React from "react";
import { FiFacebooks, Instagram, Twitter } from "./FooterElements";
import "./Footers.css";

const Footer = () => {
  return (
    <footer className="footers">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>About Us</h4>
            <ul>
              <li>
                <p>Academy Of technology</p>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Contents</h4>
            <ul>
              <li>
                <p>Prayukti</p>
              </li>
              <li>
                <p>Abohoman</p>
              </li>
              <li>
                <p>Gallery</p>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Follow us</h4>
            <ul>
              <li>
                <p><FiFacebooks className="social-links facebook" /></p>
                <p><Instagram className="social-links instagram" /></p>
                <p><Twitter className="social-links twitter" /></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
