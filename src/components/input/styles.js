import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    input {
        width: 100%;
        height: 1.9rem;
        font-size: 16px;
        padding-left: .4rem;
    }

    .custom-placeholder {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
        color: #aaa;
        transition: opacity 0.2s ease-out;
        opacity: 1;
        display: ${props => (props.hasError ? 'none' : 'block')};
    }

    input:focus + .custom-placeholder {
        opacity: 0;
    }
`
