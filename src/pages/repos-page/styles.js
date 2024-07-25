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
        gap: .2rem;
    }
`