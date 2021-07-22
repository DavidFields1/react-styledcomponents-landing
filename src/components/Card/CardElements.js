import styled from 'styled-components';

export const CardWrapper = styled.div`
    background: #FFF;
    display: flex;
    flex-direction: column;     
    align-items: center;
    border-radius: 10px;
    height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const CardIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const CardTitle = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const CardDesc = styled.p`
    font-size: 1rem;
    text-align: center;
`