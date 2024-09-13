import styled from "styled-components";


export const Container = styled.header`
    background-color: #5c9Ed0;
    position: relative;
    z-index: 1000;

    .header-container {
        padding: .2rem .6rem;
        display: flex; /* Torna a header-container flex */
        align-items: center;
    }

    .header-container .logo-container {
        flex-shrink: 0; /* Impede o logo de encolher */
    }

    .header-container .logo-container .logo {
        height: 2.2rem;
        padding: .6rem 1rem;
        background-color: #fff;
        border-radius: 2rem;
    }

    .header-container nav {
        flex-grow: 1; /* Faz o nav ocupar o espaço restante */
        position: relative;
        z-index: 100;
    }

    .header-container nav ul {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        right: -100%;
        height: 100%;
        width: 100%;
        background-color: #5c9Ed0;
        transition: right 0.3s ease-in-out;
    }

    input {
        display: none;
    }

    input:checked ~ ul {
        right: 0;
    }

    .header-container .menu {
        display: block;
        width: 50px;
        height: 50px;
        align-self: end;
        z-index: 100;
        cursor: pointer;
    }

    .header-container nav label {
        display: flex;
        flex-direction: column;
    }

    .header-container nav .menu .hamburguer {
        position: relative;
        top: 25px;
        left: 15px;
        display: block;
        width: 30px;
        height: 4px;
        background-color: #fff;
        transition: 0.5s ease-in-out;

        &::before,
        &::after {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            background-color: #fff;
            transition: 0.2s ease-in-out;
        }

        &::before {
            top: -10px;
        }

        &::after {
            top: 10px;
        }
    }

    input:checked ~ label .menu .hamburguer {
        transform: rotate(45deg);

        &::before {
            transform: rotate(90deg);
            top: 0;
        }

        &::after {
            transform: rotate(90deg);
            top: 0;
        }
    }

    @media (min-width: 480px) {
        .header-container {
            padding: .2rem 2rem;
        }
    }

    @media (min-width: 768px) {
        .header-container {
            padding: .4rem 6rem;
        }

        .header-container .menu {
            display: none;
        }

        .header-container nav ul {
            padding-left: 8rem;
            position: static;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start; /* Alinha os itens à esquerda */
            gap: 4rem;
            width: 100%;
            background-color: transparent;
        }

        .header-container nav ul li:last-child {
            margin-left: auto; /* Empurra o último item para o final */
        }
    }
`;
