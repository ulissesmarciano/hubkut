import { css } from "styled-components";

export const followUserStyles = {
  primary: css`
    display: flex;
    width: 100%;

    background-color: #efefef;
    border-radius: 0.6rem;

    .username-out {
      color: #3096d3;
      font-weight: 600;
      margin: 0.8rem;
      word-wrap: break-word;
      word-break: break-word;
    }
  `,

  secondary: css`
    background-color: transparent;

    .username-out {
      display: none;
    }
  `,
};
