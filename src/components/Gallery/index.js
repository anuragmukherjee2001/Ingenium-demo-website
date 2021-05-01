import React, {useEffect} from "react";
import Icon1 from "../../images/img4.jpg";
import Icon2 from "../../images/img5.jpg";
import Icon3 from "../../images/img6.jpg";
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  GalleryContainer,
  GalleryHeading,
  GalleryWrapper,
  Button,
} from "./GalleryElements";
import './Gallerys.css';

let myStyle = {
  width: "298px",
  height: "198px",
}

const Gallery = () => {
  useEffect(() =>{
      Aos.init({duration: 2000, delay: 50, offset:150});
  }, []);
  return (
    <>
      <GalleryContainer id="Gallery">
        <GalleryHeading data-aos="fade-up">Gallery</GalleryHeading>
        <GalleryWrapper>
          <div className="flip-card" data-aos="fade-left">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Icon3} alt="Avatar" style={myStyle}/>
              </div>
              <div className="flip-card-back">
                <h3>Photography</h3>
                <hr/>
                <h2>Mountains</h2>
                <h4>Priyanshu Chatterjee</h4>
                <p>15 April 2021</p>
              </div>
            </div>
          </div>
          <div className="flip-card" data-aos="fade-up">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Icon2} alt="Avatar" style={myStyle}/>
              </div>
              <div className="flip-card-back">
                <h3>Photography</h3>
                <hr/>
                <h2>Mountains</h2>
                <h4>Davison Hastings</h4>
                <p>26 Apr 2021</p>
              </div>
            </div>
          </div>
          <div className="flip-card" data-aos="fade-right">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Icon1} alt="Avatar" style={myStyle}/>
              </div>
              <div className="flip-card-back">
                <h3>Photography</h3>
                <hr/>
                <h2>Forest</h2>
                <h4>Supriya Karmakar</h4>
                <p>15 April 2021</p>
              </div>
            </div>
          </div>
        </GalleryWrapper>
        <Button data-aos="slide-up">Show Featured</Button>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
