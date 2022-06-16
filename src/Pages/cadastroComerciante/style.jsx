import styled, { keyframes } from "styled-components";


export const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BoxVetor = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    background-size: 100%;
`

export const Back = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    transition: 0.3s ease-in all;
    
    
    &:hover{
        transform: translate(-8px);
    }
    
`

export const CapaVetor = styled.div`
    position: absolute;
    width: 100%; 
    height: auto;
    top: 40%;
    left: -10%;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 70%;
    }
`

export const BoxForm = styled.div`
    width: 50%;
`