import styled from "styled-components";

export const Container = styled.main`
    padding: 1rem 6rem;
    gap: .4rem;
    display: flex;
    width: 100%;
    
    .user-section {
        flex: 1;
    }

    .info-section {

        display: flex;
        flex-direction: column;
        flex: 4;
        gap: 1rem;
    }

    .follow-section {
        flex: 1;

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`