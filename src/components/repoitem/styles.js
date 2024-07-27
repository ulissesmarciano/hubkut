import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.li`
    padding: 1rem;
    display: flex;
    flex-direction: column;

    word-wrap: break-word;
    word-break: break-word;

    background-color: #d9e6f6;

    .repo-description {
        color: #888888;
        font-size: .8rem;
        font-weight: 500;
    }

    .language {
        margin-top: .4rem;
        font-size: .8rem;
    }
`

export const RepoLink = styled(Link)`

    display: flex;
    align-items: center;
    gap: .4rem;

    color: #308bc5;
    font-weight: 700;

    .repo-icon {
        height: 18px;
    }
;
`