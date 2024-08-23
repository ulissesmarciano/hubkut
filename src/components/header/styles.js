import styled from "styled-components";

export const Container = styled.header`
    padding: .4rem 6rem;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    background-color: #5c9Ed0;

    .logo-section {
        padding: .6rem 1rem;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        background-color: #fff;
        border-radius: 50px;
    }

    .logo-section img{
        height: 1rem;

    }

    .menu-section {
        margin-left: 8rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .menu-section ul{

        gap: 4rem;
        
        display: flex;
    }

    .sidebar-section {
        display: none;
    }

    @media ( max-width:801px) {
        padding: .2rem 2rem;

        .menu-section ul {
            display: none;
        }

        .sidebar-section {
            display: block;
        }
    }

    @media (max-width:480px) {
        padding: .2rem .6rem;
    }
`