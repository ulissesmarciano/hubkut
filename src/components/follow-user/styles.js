import styled from "styled-components";
import { Link } from "react-router-dom";


export const UserLink = styled(Link)`
    width: 80px;
    height: 100px;

    background: 
        linear-gradient(transparent, #00000060),
        url(${(props) => props.imageurl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: flex-end;
    border-radius: 6px;

    .username {
        word-wrap: break-word;
        word-break: break-word;
        max-width: 100%;

        text-align: center;
        color: #fff;
        font-size: .8rem;
        font-weight: 600;
    }
`