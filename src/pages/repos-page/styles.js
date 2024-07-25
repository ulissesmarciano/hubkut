import styled from "styled-components";

export const Container = styled.main`
    margin: 1rem 6rem;
    padding: 1rem;
    
    background-color: #fff;
    
    .link-section {
        margin: .6rem 0;

        display: flex;
        flex-direction: column;
        align-items: end;
    }

    .repos-section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: .3rem;
    }
    @media(max-width: 1024px){
        .repos-section {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 768px){
        margin: 1rem 2rem;

        .repos-section {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 480px) {
        margin: .8rem;
    }
`