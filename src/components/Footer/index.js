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
          <div className="col">
            <h4>Subscribe for the latest posts</h4>
            <form>
            <div class="containers" style={{backgroundColor: "white"}}>
    <input type="text" placeholder="Name" name="name" required/>
    <input type="text" placeholder="Email address" name="mail" required/>
    <label>
    </label>
  </div>

  <div class="container">
    <input type="submit" value="Subscribe"/>
  </div>
</form>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
