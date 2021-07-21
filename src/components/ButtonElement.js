import styled from 'styled-components';
import { Link as LinkScroll} from 'react-scroll';

export const Button = styled(LinkScroll)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#016FB9' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#FFF')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#FFF' : '#016FB9')};        
    }
`