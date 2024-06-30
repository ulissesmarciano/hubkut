import styled from "styled-components";

export const Container = styled.main`
    height: 100vh;
    padding: 1rem;

    background-color: #d9e6f6;

    .login-container {
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        background-color: #fff;
        border-radius: 2px;

        @media(min-width: 769px){
            height: 800px;
        }

    }

    .login-container figure{
        display: flex;
        justify-content: center;
    }
    
    .login-container figure img {
        width: 80%;
        margin-bottom: 3rem;

    }

    .login-container .login-page-text {
        display: none;
    }

    .login-container .login-input-section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .login-container .login-input-section form {
        width: 100%;
        gap: .6rem;
        position: relative;
        
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media(min-width: 375px){
            gap: 1rem;
            max-width: 350px;
        }
    }

    .error-message{
        width: 100%;
        position: absolute;
        transform: translate(-50%, -50%);
        z-index: 1;
        top: 150%;
        left: 50%;
        
        font-size: .8rem;
        color: #ff0000;
        font-weight: 500;
        text-align: center;
        
    }

    @media (min-width: 769px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
    `