import styled from "styled-components";

export const Container = styled.main`
  padding: 1rem;

  .user-side,
  .info-section {
    margin-bottom: 0.4rem;
  }

  .follow-side {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  @media (min-width: 480px) {
    padding: 1rem 2rem;
  }

  @media (min-width: 802px) {
    padding: 1rem 6rem;
  }

  @media (min-width: 768px) {
    display: grid;
    gap: 0.4rem;
    grid:
      "user-side info-section"
      /236px 1fr;

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

  @media (min-width: 1024px) {
    max-width: 120rem;
    margin: 0 auto;

    grid:
      "user-side info-section follow-side"
      /236px 1fr 285px;

    .follow-side {
      display: flex;
    }
  }
`;
