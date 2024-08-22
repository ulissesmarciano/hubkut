import styled from "styled-components";

export const Container = styled.main`
    margin-top: 1rem;
    display: grid;
    gap: .4rem;

    padding: 0 6rem;

    grid: 
          "user-section info-section follow-side"
          / 235px 1fr 285px
    ;
    
    .user-section {
        grid-area: user-section;
    }

    .info-section {
        display: flex;
        flex-direction: column;
        flex: 4;
        gap: 1rem;

        grid-area: info-section;
    }

    .follow-side {
        flex: 1;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        grid-area: follow-side;
    }

    .follow-side .follow-section {
        display: grid;
        grid-template-columns: 1fr 1fr1fr;
    }

    @media(max-width: 1024px){

        grid: 
          "user-section info-section"
          / 235px 1fr
        ;

        .follow-side {
            display: none;
        }
    }



    @media(max-width: 768px){

        padding: 2rem;

        grid: "info-section"/ 1fr;

        .user-section {
            display: none;
        }
    }

    @media(max-width: 480px){
        padding: 1rem;

        .info-section {
            width: 100%;
        }
    }
`