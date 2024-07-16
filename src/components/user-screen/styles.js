import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    padding: 1rem;
    
    
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: .6rem;


    .user-profile-picture img {

        height: 12rem;
        width: 12rem ;

        border-radius: 50rem;
    }

    span {
        margin: 1rem auto;
        width: 100%;

        border: 1px solid #d9e6f6;
    }

    .username-section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .info-list-section li {
        margin-bottom: 1rem;

        display: flex;
        align-items: center;
        
    }

    .info-list-section li img {
        width: 1.4rem;
        
    }

    .info-list-section li p {
        margin-left: 1rem;
    }

    .username-section h3, 
    .info-list-section p {
        word-wrap: break-word;
        word-break: break-word;
        max-width: 100%;
    }
`