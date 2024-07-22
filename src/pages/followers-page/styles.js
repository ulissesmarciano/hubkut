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
`