import styled, { keyframes } from "styled-components";

const Media = {
    Laptop: "@media(min-width: 1024px)",
    Tablet: "@media(max-width: 768px)"
}

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BoxVetor = styled.div`
    position: relative;
    width: 45%;
    height: 100%;
    background-size: 100%;
    background-color: #2980B9;
                    
   clip-path: polygon(68% 0%, 90% 20%, 100% 60%, 87% 100%, 0 100%, 0% 60%, 0 0);
   box-shadow: 20px 0  #A0D1DC;

    ${Media.Tablet}{
        display: none;
    }
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
    left: -5%;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 70%;
    }
`

export const BoxForm = styled.div`
    width: 50%;

    ${Media.Tablet}{
        margin: auto;
        width: 90%;
    }
`