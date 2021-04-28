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
    ArrowForward, ArrowRight
} from "./BannerElements";
import Video from "../../videos/video.mp4"
import {useState} from "react";
// import { Button } from "../ButtonElements";

const BannerSection = () =>{

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return(
        <BannerContainer>
            <BannerBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </BannerBg>
            <BannerContents>
                <BannerHeading>Ingenium</BannerHeading>
                <BannerPara>
                    Thoughts, stories and ideas.
                </BannerPara>
                <BannerBtnWrapper>
                    <Button to='editorial' onMouseEnter={onHover} onMouseLeave={onHover} primary={true} dark={true}>
                        Explore Now {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </BannerBtnWrapper>
            </BannerContents>
        </BannerContainer>
    );
};

export default BannerSection