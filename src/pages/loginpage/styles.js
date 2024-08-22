import styled from "styled-components";

export const Container = styled.main`
    padding: 1rem;

    .login-container {
        height: calc(100vh - 2rem);
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        background-color: #fff;
        border-radius: 2px;
    }
    
    
    .login-container .login-info-container .login-page-text {
        display: none;
    }

    figure{
        display: flex;
        justify-content: center;
    }
    
    .login-container .login-info-container figure img {
        width: 80%;
        margin-bottom: 3rem;
    } 

    .login-container .login-section .login-form {
        width: 100%;
        gap: .6rem;
        position: relative;

    }

    .login-container .login-section .login-form span {
        display: none;
    }

    
    .login-container .login-section .user-form-section {
        height: 100%;
        display: flex;
        gap: .5rem;
        align-items: center;
        
        margin-bottom: 2rem;
        
    }
    
    .login-container .login-section .login-box {
        display: flex;
        align-items: center;

        gap: .5rem;
        
    }

    .error-message{
        width: 100%;
        position: absolute;
        transform: translate(-50%, -50%);
        z-index: 1;
        top: 130%;
        left: 50%;
        
        font-size: .8rem;
        color: #ff0000;
        font-weight: 600;
        text-align: center;
    }

    .login-container .singnin-section {
        text-align: center;
    }

    .login-container .singnin-section a {
            color: #2463e0;
            font-weight: bold;
            text-decoration: underline;
            cursor: pointer;
    }

    @media (min-width: 769px){
        height: calc(100vh - 4rem);
    }

    @media (min-width: 1024px){
        display: flex;
        align-items: center;
        justify-content: center;

        .login-container {
            max-height:450px ;
            width: 100%;

            padding: 0 4rem;

            display: grid;
            grid-template-areas: "login-info-container ."
                                 "login-info-container login-section"
                                 "login-info-container singnin-section"
                                 "login-info-container ."
                                 ;
                                 
            grid-template-columns: 1fr 345px;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            gap: 1rem;
            
            background-color: transparent;
        }

        .login-container .login-info-container {
            background-color: #fff;
            height: 100%;

            
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            
            grid-area: login-info-container;

        }

        .login-container .login-info-container figure img {
            max-width: 30rem;
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
        
                
       .login-container .login-section {
            padding: 1rem .6rem;

            text-align: center;
            font-size: .8rem;

            flex-direction: column;

            grid-area: login-section;
            
            background-color: #e8eefa;
            border-radius: 2px;

        }

        .login-container .login-section .login-form span {
            display: block;
            margin-bottom: 1rem;
            
            font-size: 1rem;
        }


        .login-container .login-section .login-box{
            gap: 1rem;
            
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .login-container .login-section .user-form-section {
            align-items: flex-start;
            margin: 0;
        }

        .login-section .user-form-section p {
            font-size: 1rem;
            margin: .2rem;
        }

        .login-container .singnin-section {
            padding: 1rem .6rem;
            width: 100%;
            gap: 1rem;

            display: flex;
            flex-direction: column;
            align-items: center;

            background-color: #e8eefa;
            border-radius: 2px;

            grid-area: singnin-section;

        }
    }
    
`



