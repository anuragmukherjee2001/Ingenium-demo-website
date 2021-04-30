import React from "react";
import {
  BannerContainer,
  BannerBg,
  VideoBg,
  BannerContents,
  BannerHeading,
  BannerPara,
  BannerBtnWrapper,
  Button,
  ArrowForward,
  ArrowRight,
  Button2,
} from "./BannerElements";
import Video from "../../videos/video.mp4";
import { useState } from "react";

const BannerSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <BannerContainer>
      <BannerBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </BannerBg>
      <BannerContents>
        <BannerHeading>Ingenium</BannerHeading>
        <BannerPara>Thoughts, stories and ideas.</BannerPara>
        <BannerBtnWrapper>
          <Button
            to="editorial"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={true}
            dark={true}
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
          >
            Explore Now {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </BannerBtnWrapper>
      </BannerContents>
    </BannerContainer>
  );
};

export default BannerSection;
