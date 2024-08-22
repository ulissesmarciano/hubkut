import styled from "styled-components";

export const Container = styled.section`
    padding: 1.4rem 1rem;

    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: .3rem;

    gap: 1rem;

    .link-container {
        display: flex;
        gap: 1rem;
    }

    @media (max-width: 543px){
        .link-container :last-child {
            display: none;
        }
    }
`