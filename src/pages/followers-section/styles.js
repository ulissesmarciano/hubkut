import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  .link-section {
    margin: 0.4rem 0;
    padding: 1rem 0;

    display: flex;
    justify-content: space-between;
  }

  .link-section p {
    font-size: 1.2rem;
    font-weight: 800;
  }

  .followers-section {
    margin: 1rem;
    padding: 1rem;

    background-color: #fff;
    border-radius: 0.6rem;
  }

  .followers-section .list {
    display: grid;
    gap: 0.4rem;
  }

  @media (min-width: 481px) {
    padding: 1rem 1.2rem;
  }

  @media (min-width: 800px) {
    padding: 1rem 4rem;
    max-width: 120rem;

    .followers-section .list {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
