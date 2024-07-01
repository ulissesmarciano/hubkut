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
    }

    .login-container .login-info-container .login-page-text {
        display: none;
       
    }
    


    .login-container figure{
        display: flex;
        justify-content: center;
    }
    
    .login-container .login-info-container figure img {
        width: 80%;
        margin-bottom: 3rem;

    }

    .login-container .login-singnin-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    .login-container .login-singnin-section form {
        width: 100%;
        gap: .6rem;
        position: relative;
        
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .login-container .login-singnin-section .login-section span {
        display: none;
    }

    .login-container .login-singnin-section .login-section .login-box {
        display: flex;
        align-items: center;

        gap: .5rem;
        
    }

    .login-container .login-singnin-section .login-section .user-form-section {
        height: 100%;
        display: flex;
        gap: .5rem;
        align-items: center;

        margin-bottom: 2rem;

    }

    .error-message{
        width: 100%;
        position: absolute;
        transform: translate(-50%, -50%);
        z-index: 1;
        top: 63%;
        left: 50%;
        
        font-size: .8rem;
        color: #ff0000;
        font-weight: 500;
        text-align: center;
        
    }

    .login-container .login-singnin-section .singnin-section {
        text-align: center;
    }

    .login-container .login-singnin-section .singnin-section a {
            color: #2463e0;
            font-weight: bold;
            text-decoration: underline;
    }

    @media (min-width: 769px){
        display: flex;
        align-items: center;
        justify-content: center;

        .login-container {
            height: 800px;

        }
    }

    @media (min-width: 1024px){
        .login-container {
            height: 100vh;
            width: 100%;
            gap: 1rem;

            display: flex;
            flex-direction: row;
            background-color: transparent;
        }

        .login-container .login-info-container {
            width: 70%;
            height: 450px;
            background-color: #fff;

            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;

        }

        .login-container .login-info-container figure img {
            max-width: 30rem;
            margin-bottom: 3rem;

        }

        .login-container .login-info-container .login-page-text {
            margin-bottom: 1rem;
            
            display: flex;
            flex-direction: column;
            align-items: center;
            
            font-size: 1.2rem;
            
            span {
                font-size: 1.2rem;
                font-weight: 800;
                color: #BE0F84;
            }
        }
        
        .login-container .login-singnin-section {
            width: 380px;
            height: 400px;
            gap: 2rem;
    
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .login-container .login-singnin-section .login-section {
            padding: 1rem .6rem;

            text-align: center;
            font-size: .8rem;

            flex-direction: column;
            
            background-color: #e8eefa;
            border-radius: 2px;

        }

        .login-container .login-singnin-section .login-section span {
            display: block;
            margin-bottom: 1rem;
            
            font-size: 1rem;
        }


        .login-container .login-singnin-section .login-section .login-box{
            gap: 1rem;
            
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .login-container .login-singnin-section .login-section .user-form-section {
            align-items: flex-start;
            margin: 0;
        }

        .login-container .login-singnin-section .login-section .user-form-section p {
            font-size: 1rem;
            margin: .2rem;
        }

        .login-container .login-singnin-section .singnin-section {
            padding: 1rem .6rem;
            width: 100%;
            gap: 1rem;

            display: flex;
            flex-direction: column;
            align-items: center;

            background-color: #e8eefa;
            border-radius: 2px;

        }

        
    }
    
`



