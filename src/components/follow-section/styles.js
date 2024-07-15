import styled from "styled-components";


export const Container = styled.section`
    padding: 1.4rem 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    background-color: #fff;
    border-radius: .3rem;

    .section-name {
        font-weight: 800;
        font-size: 1.2rem;
    }

    .section-name span {
        color: #3096d3;
    }
    
    .follow-section {
        margin: auto;
        
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: .4rem;
        background-color: #fff;
    }
`

