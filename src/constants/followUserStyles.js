import { css } from 'styled-components';

export const followUserStyles = {
  primary: css`
    display: flex;
    width: 100%;

    background-color: #efefef;
    border-radius: .6rem;

    .username-out {
      color: #3096d3;
      font-weight: 600;
      margin: .8rem;
    }
  `,

  secondary: css`
    background-color: transparent;

    .username-out {
      display: none;
    }
  `,
};
