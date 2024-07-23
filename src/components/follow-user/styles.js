import styled from "styled-components";
import { Link } from "react-router-dom";
import { followUserStyles } from "../../constants/followUserStyles";

export const Container = styled(Link)`
  ${({ $variant }) => followUserStyles[$variant] || followUserStyles.primary}
`

export const UserSection= styled.div`
  width: 80px;
  height: 100px;

  background: 
    linear-gradient(transparent, #00000060),
    url(${(props) => props.$imageurl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: flex-end;
  border-radius: 6px;

  .username-in {
    word-wrap: break-word;
    word-break: break-word;
    max-width: 100%;

    text-align: center;
    color: #fff;
    font-size: .8rem;
    font-weight: 600;
  }
`

