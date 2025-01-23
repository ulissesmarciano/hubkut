import styled from "styled-components";

export const Container = styled.section`
  padding: 1.4rem 1rem;

  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0.3em;

  gap: 1rem;

  .repo-section {
    margin-bottom: 1rem;

    display: flex;
    flex-direction: column;
    gap: 0.1rem;

    :first-child {
      border-radius: 10px 10px 0 0;
    }

    :last-child {
      border-radius: 0 0 10px 10px;
    }
  }
`;
