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
                <a href="#">Created by love</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Contents</h4>
            <ul>
              <li>
                <a href="#">Prayukti</a>
              </li>
              <li>
                <a href="#">Abohoman</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Follow us</h4>
            <ul>
              <li>
                <a><FiFacebooks className="social-links facebook" /></a>
                <a><Instagram className="social-links instagram" /></a>
                <a><Twitter className="social-links twitter" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
