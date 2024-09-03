import styled from "styled-components";

export const Container2 = styled.main`
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

export const Container = styled.main`
    margin: 1rem;
    padding: 1rem;
    
    background-color: #fff;
    border-radius: 1rem;
    
    .link-section {
        margin: .4rem 0;
        padding: 1rem 0;

        display: flex;
        justify-content: space-between;
    }

    .link-section p {
        font-size: 1.2rem;
        font-weight: 800;
    }

    .repos-section {
        display: grid;
        gap: .4rem;
    }

    @media (min-width: 481px){
        margin: 1rem 2rem;
    }

    @media (min-width: 800px){
        margin: 1rem 6rem;

        .repos-section {
            grid-template-columns: 1fr 1fr;
            
        }
    }
`