import styled from 'styled-components';

export const ServicesCointainer = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    padding-bottom: 200px;
    text-align: center;

    @media screen and (max-width: 768px){
        height: 1500px;

    }

    
    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const ServicesTitle = styled.h1`
    font-size: 2.5rem;
    color: #FFF;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2.5rem;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
        
    }
`