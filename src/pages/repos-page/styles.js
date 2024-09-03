import styled from "styled-components";


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