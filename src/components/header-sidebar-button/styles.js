import styled from "styled-components";
import { TfiMenu, TfiClose } from "react-icons/tfi";

export const Container = styled.button`
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    
`;

export const Icon = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const TfiMenuIcon = styled(TfiMenu)`
    fill: #fff; /* Cor branca */
    height: 2rem;
    width: 2rem;
`;

export const TfiCloseIcon = styled(TfiClose)`
    fill: #fff; /* Cor branca */
    height: 2rem;
    width: 2rem;
    stroke: #fff; /* Cor do contorno */
    stroke-width: 1; /* Aumentar a espessura */
`;
