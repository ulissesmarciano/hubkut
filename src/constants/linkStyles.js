import { css } from 'styled-components';

export const linkStyles = {
  todoLinkPrimary: css`
    
    padding: .4rem;
    
    background-color: #6f92bb;
    border-radius: 10px;
    color: #fff;
    font-size: .9rem;
  `,

  todoLinkSecondary: css`
    padding: .4rem;
    
    border-radius: 10px;
    background-color: #d9e6f6;
    color: #308bc5;
    font-size: .9rem;
    `,
    
  danger: css`
    background-color: red;
    color: white;
    border: none;
    &:hover {
      background-color: darkred;
    }
  `,
};
