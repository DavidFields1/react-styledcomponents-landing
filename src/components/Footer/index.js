import React from 'react';
import { column1, column2 } from './data';
import {
    FooterContainer,
    FooterWrapper,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        { column1.map( (column) => { 
                            return (<FooterLinkItems key={column.title}>
                                        <FooterLinkTitle> {column.title} </FooterLinkTitle>                                                                
                                            {column.links.map( (link) => {                                                 
                                                return <FooterLink to="/" key={link}> {link} </FooterLink>
                                            }) }                                       
                                    </FooterLinkItems>)
                        })}                    
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        { column2.map( (column) => { 
                                return (<FooterLinkItems key={column.title}>
                                            <FooterLinkTitle> {column.title} </FooterLinkTitle>                                                                
                                                {column.links.map( (link) => {                                                 
                                                    return <FooterLink to="/" key={link}> {link} </FooterLink>
                                                }) }                                       
                                        </FooterLinkItems>)
                        })}   
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
