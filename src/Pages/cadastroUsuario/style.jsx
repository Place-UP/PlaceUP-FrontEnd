import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`

export const BoxVetor = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Form = styled.div`
    width: 50%;
`

export const Vetores = styled.div`
    width: 50%;
`

export const Termos = styled.div`
    margin-top: 40px;
    margin-bottom: 60px;
    text-align: center;

    a{
        color: #2980B9;
    }
`

export const Back = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: translate(6px);
    }
`