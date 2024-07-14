import styled from "styled-components";

export const Container = styled.main`
    padding: 1rem 6rem;
    gap: .4rem;
background-color: red;
    display: flex;
    width: 100%;
    
    .user-section {
        background-color: yellow;
        flex: 1;
    }

    .info-section {
        background-color: orange;

        display: flex;
        flex-direction: column;
        flex: 4;
        gap: 1rem;
    }

    .follow-section {
        background-color: green;
        flex: 1;
    }
`