import styled from "styled-components";

export const Container = styled.main`
    margin: 0 auto;
    padding: 1.2rem 1rem;
    max-width: 120rem;

    display: flex;
    flex-direction: column;

    .user-side {
        margin-bottom: .4rem;
    }

    .info-section {
        margin-bottom: .4rem;

        display: flex;
        flex-direction: column;
        gap: .4rem;
    }

    .follow-side {
        display: flex;
        flex-direction: column;
        gap: .4rem;
    }

    @media (min-width: 481px) {
        padding: 1.2rem 2rem;
    }

    @media(min-width: 768px) {
        padding: 1.2rem 6rem;

        display: grid;
        gap: .4rem;
        grid: "user-side info-section" / 235px 1fr;

        .user-side {
            grid-area: user-side;
        }

        .info-section {
            grid-area: info-section;
        
        }

        .follow-side {
            display: none;
        }
    }

    @media(min-width: 1024px) {
        grid: "user-side info-section follow-side"/ 235px 1fr 285px;
        .follow-side {
            display: flex;
            flex-direction: column;

            grid-area: follow-side;
        }
    }
`