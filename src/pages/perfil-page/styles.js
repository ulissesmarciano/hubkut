import styled from "styled-components";

export const Container = styled.main`
    padding: 1rem 6rem;
    gap: .4rem;
    width: 100%;
    
    display: grid;
    grid: "user-side info-section follow-side"
          /236px 1fr 285px
    ;
    
    .user-side {
        flex: 1;

        grid-area: user-side;
    }

    .info-section {
        width: 100%;
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

        grid: "user-side info-section"
              /236px 1fr
        ;
        .follow-side {
            display: none;
        }
    }

    @media(max-width: 768px){
        display: inline-block;
        .user-side {
            margin-bottom: .4rem;
        }

        .info-section {
            margin-bottom: .4rem;
        }

        .follow-side {
            width: 100%;

            display: flex;
            flex-direction: column;
            gap: .4rem;
        }
    }

    @media(max-width: 768px){

        padding: 2rem;
    }

    

    @media(max-width: 480px){
        padding: 1rem;
    }
`

