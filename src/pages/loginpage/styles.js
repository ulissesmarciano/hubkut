import styled from "styled-components";

export const Container = styled.main`
    height: 100vh;
    padding: 1rem;

    background-color: #d9e6f6;

    .login-section {
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        background-color: #fff;
        border-radius: 2px;

    }
    
    .login-section img {
        width: 100%;
        margin-bottom: 2rem;

    }

    .login-section .login-input-section {
        
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        background-color: yellow;
    }
    `