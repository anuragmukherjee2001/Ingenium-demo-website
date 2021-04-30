import React from "react";
import Icon1 from "../../images/img4.jpg";
import Icon2 from "../../images/img5.jpg";
import Icon3 from "../../images/img6.jpg";
import {
  GalleryContainer,
  GalleryHeading,
  GalleryH2,
  GalleryP,
  GalleryIcon,
  GalleryWrapper,
  GalleryCard,
  Button,
} from "./GalleryElements";

const Gallery = () => {
  return (
    <>
      <GalleryContainer id="Gallery">
        <GalleryHeading>Gallery</GalleryHeading>
        <GalleryWrapper>
          <GalleryCard>
            <GalleryIcon src={Icon1} />
            <GalleryH2>ddddd</GalleryH2>
            <GalleryP>Hi this is Anurag signing off</GalleryP>
          </GalleryCard>
          <GalleryCard>
            <GalleryIcon src={Icon2} />
            <GalleryH2>ddddd</GalleryH2>
            <GalleryP>Hi this is Anurag signing off</GalleryP>
          </GalleryCard>
          <GalleryCard>
            <GalleryIcon src={Icon3} />
            <GalleryH2>ddddd</GalleryH2>
            <GalleryP>Hi this is Anurag signing off</GalleryP>
          </GalleryCard>
          <Button>Read More</Button>
        </GalleryWrapper>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
