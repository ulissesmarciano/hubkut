import styled from "styled-components";
import { TfiMenu } from "react-icons/tfi";

export const Container = styled.button`
    border: none;
    background-color: transparent;

    cursor: pointer;
`

export const Icon =  styled(TfiMenu)`
    fill: white;
    height: 2rem;
    width: 2rem;
`