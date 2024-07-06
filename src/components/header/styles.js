import styled from "styled-components";

export const Container = styled.header`
    padding: .2rem .6rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    background-color: #5c9Ed0;

    .logo-section {
        padding: .6rem 1rem;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #fff;
        border-radius: 50px;
    }

    .logo-section img{
        height: 1rem;

    }

    .menu-section {
        display: none;
    }
`