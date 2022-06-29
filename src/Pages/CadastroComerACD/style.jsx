import styled, { keyframes } from "styled-components";
import 'animate.css';

const Media = {
    Laptop: "@media(max-width: 1024px)",
}

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    .boxShadow{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 5%;
        clip-path: polygon(100% 100%, 100% 0%, 31.69% 0%, 20.28% 4.18%, 16.17% 7.73%, 12.83% 12.27%, 11.27% 17.7%, 6.41% 38.02%, 1.04% 58.53%, 0% 63.76%, 0% 71.56%, 1.97% 77.58%, 5.82% 83.64%, 11.25% 89.44%, 17.47% 94.38%, 24.54% 100%);
        background-color: #2980B9;
        z-index: -20;
    }
`

export const BoxVetor = styled.div`
    position: relative;
    width: 80%;
    height: 100%;
    background-size: 100%;
    background-color: #A0D1DC;   
    clip-path: polygon(100% 100%, 100% 0%, 31.69% 0%, 20.28% 4.18%, 16.17% 7.73%, 12.83% 12.27%, 11.27% 17.7%, 6.41% 38.02%, 1.04% 58.53%, 0% 63.76%, 0% 71.56%, 1.97% 77.58%, 5.82% 83.64%, 11.25% 89.44%, 17.47% 94.38%, 24.54% 100%);
    transform: scale(-1, 1);
    z-index: 12;

    ${Media.Laptop}{
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
    left: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(-1, 1);
    

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