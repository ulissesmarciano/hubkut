import styled from "styled-components";

export const Container = styled.main`
    .followers-section {
        margin: 1rem auto;
        padding: 1rem;
        max-width: 1400px;
        
        background-color: #fff;
        border-radius: .6rem;
    }
    
    .followers-section .list{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: .4rem;
        
    }

    @media(max-width: 1440px){
        .followers-section {
            margin: 1rem 6rem;
        }
    }

    @media(max-width: 768px){
        .followers-section {
            margin: 1rem 2rem;
        }

        .followers-section .list {
            grid-template-columns: 1fr;
        }

        .followers-section .list li{
            word-wrap: break-word;
            word-break: break-word;
            max-width: 100%;
        }
    }
`