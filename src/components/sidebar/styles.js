import styled from "styled-components";

export const Container = styled.section`
    background-color: #5c9ed0;
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;

    position: absolute;
    top: 0;
    right: 0;

    animation: openSidebar 600ms ease-in-out;

    @keyframes openSidebar {
        from{
            width: 0;
        }

        to {
            width: 100%;
        }
    }

    .close-sidebar-section {
        padding: .6rem 2rem;

        display: flex;
        justify-content: end;

        animation: fadeIn 1s ease-in;

        @keyframes fadeIn {
            from { 
                opacity: 0; 
            }

            to { 
                opacity: 1; 
            }
            
        }

    }

    .menu-section{
        margin: 0;
        height: 80%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        background-color: red;

    }

     
    @media (max-width: 480px) {
        .close-sidebar-section {
            padding-right: .6rem;
        }
    }
`