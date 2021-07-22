import React from 'react';
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

const InfoSection = ({data}) => {        
    return (
        <>
            <InfoContainer lightBg={data.lightBg} id={data.id}>
                <InfoWrapper>
                    <InfoRow imgStart={data.imgStart}>
                        <FirstColumn>
                            <TextWrapper>
                                <TopLine>{data.topLine}</TopLine>
                                <Heading lightText={data.lightText}>{data.heading}</Heading>
                                <Subtitle darkText={data.darkText}>{data.description}</Subtitle>
                                <BtnWrap>
                                    <Button to="home" primary={data.primary ? 1 : 0} smooth={true} duration={500} spy={true} exact={1} offset={-80} dark={data.dark ? 1 : 0}>{data.buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </FirstColumn>
                        <SecondColumn>
                            <ImgWrap>
                                <Img src={data.img.default} alt={data.alt}/>
                            </ImgWrap>
                        </SecondColumn>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
