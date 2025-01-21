import styled from "styled-components";

export const Container = styled.section`
  padding: 1.4rem 1rem;

  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0.3rem;

  gap: 1rem;

  .link-container {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  @media (max-width: 543px) {
    .link-container {
      flex-wrap: nowrap;
      overflow-x: scroll;
      overflow-y: hidden;
    }
  }
`;
