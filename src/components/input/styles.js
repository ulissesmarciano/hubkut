import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    input {
        width: 100%;
        height: 100%;
        font-size: 16px;
    }

    .custom-placeholder {
        position: absolute;
        left: 12px; /* Ajuste conforme necessário */
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none; /* Para permitir clicar no input abaixo */
        color: #aaa; /* Cor do placeholder personalizado */
        transition: opacity 0.2s ease-out; /* Efeito de transição opcional */
        opacity: 1; /* Inicialmente visível */
    }

    input:focus + .custom-placeholder {
        opacity: 0; /* Desaparece quando o input está focado */
    }
`