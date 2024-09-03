import { css } from 'styled-components';

export const linkStyles = {
  todoLinkPrimary: css`
    padding: .4rem;
    min-width: 116px;
    text-align: center;
    
    background-color: #6f92bb;
    border-radius: 10px;
    color: #fff;
    font-size: .9rem;
  `,

  todoLinkSecondary: css`
    padding: .4rem;
    min-width: 116px;
    text-align: center;
    
    border-radius: 10px;
    background-color: #d9e6f6;
    color: #308bc5;
    font-size: .9rem;
    text-transform: capitalize;
  `,
    
  seAllLink: css`
    color: #308bc5;
    font-weight: 700;

    &:hover {
      color: #888888;
    }
  `,

  headerLink: css`
    color: #fff;
    text-transform: capitalize;
  `,
};
