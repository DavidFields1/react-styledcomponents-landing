import React, {useEffect} from 'react';
import { Button } from '../ButtonElement';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    FirstColumn,
    SecondColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoElements';

const InfoSection = ({id, lightBg, imgStart, topLine, lightText, heading, description, darkText, buttonLabel, alt, primary, dark, img}) => {    
    return (        
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <FirstColumn>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{heading}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to="home" primary={primary ? 1 : 0} smooth={true} duration={500} spy={true} exact={true} offset={-80} dark={dark ? 1 : 0}>{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </FirstColumn>
                        <SecondColumn>
                            <ImgWrap>
                                <Img src={img.default} alt={alt}/>
                            </ImgWrap>
                        </SecondColumn>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
