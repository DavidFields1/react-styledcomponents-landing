import React, { useState } from 'react';
import Video from '../../video/video.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroTitle,
    HeroDescription,
    HeroBtnWrapper,    
    ArrowForward,
    ArrowRight
} from './HeroElements';
import { Button } from '../ButtonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroTitle> Virtual Banking Made Easy</HeroTitle>
                <HeroDescription> Sign Up for a new account today and receive $200 in credit towards your next payment </HeroDescription>
                <HeroBtnWrapper>
                    <Button to="/signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )   
}

export default HeroSection