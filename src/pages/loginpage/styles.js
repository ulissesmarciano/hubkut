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

    .login-section figure{
        display: flex;
        justify-content: center;
    }
    
    .login-section figure img {
        width: 80%;
        margin-bottom: 3rem;

    }

    .login-section .login-input-section {
        
        width: 100%;
        display: flex;
        gap: .6rem;
        align-items: center;
        justify-content: space-between;

        @media(min-width: 375px){
            gap: 1rem;
            max-width: 350px;
        }
    }

    .error-message{
        margin: 1rem;
        font-size: .8rem;

        color: #ff0000;
        font-weight: 500;
    }
    `