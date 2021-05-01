import React, {useEffect} from "react";
import { Button } from "../ButtonElements";
import {useState} from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  ImgWrap,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
  ArrowRight,
  ArrowForward
} from "./InfoElements";

const Info = ({
  lightBg,
  imgStart,
  id,
  topLine,
  ButtonLabel,
  lightText,
  darkText,
  description,
  img,
  alt,
  HeadLine,
  primary,
  dark,
  dark2,
}) => {

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  useEffect(() =>{
    Aos.init({duration: 2000, delay: 50, offset:150});
  }, []);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}  data-aos="zoom-in">{HeadLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap data-aos="slide-up">
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={!!primary}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {ButtonLabel} {hover ? <ArrowForward /> : <ArrowRight />}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap  data-aos="zoom-in-down">
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
