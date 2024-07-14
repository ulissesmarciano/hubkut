import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.li`
    padding: 1rem;
    display: flex;
    flex-direction: column;
margin: 2px;

    background-color: #d9e6f6;

    .repo-description {
        color: #888888;
        font-size: .8rem;
        font-weight: 500;
    }
`

export const RepoLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: .4rem;

    .repo-icon {
        height: 18px;
    }
`