import styled from "styled-components";
import 'animate.css';

const Media = {
    Laptop: "@media(max-width: 1024px)",
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .boxShadow{
        position: absolute;
        width: 95%;
        height: 100%;
        right: 0;
        clip-path: polygon(100% 100%, 100% 0%, 31.69% 0%, 20.28% 4.18%, 16.17% 7.73%, 12.83% 12.27%, 11.27% 17.7%, 6.41% 38.02%, 1.04% 58.53%, 0% 63.76%, 0% 71.56%, 1.97% 77.58%, 5.82% 83.64%, 11.25% 89.44%, 17.47% 94.38%, 24.54% 100%);
        background-color: #2980B9;
        z-index: -20;
    }
`

export const BoxVetor = styled.div`
    position: relative;
    width: 80%;
    height: 100%;
    background-color: #A0D1DC;
    clip-path: polygon(100% 100%, 100% 0%, 31.69% 0%, 20.28% 4.18%, 16.17% 7.73%, 12.83% 12.27%, 11.27% 17.7%, 6.41% 38.02%, 1.04% 58.53%, 0% 63.76%, 0% 71.56%, 1.97% 77.58%, 5.82% 83.64%, 11.25% 89.44%, 17.47% 94.38%, 24.54% 100%);
    

    ${Media.Laptop}{
        display: none;
    }
`

export const Form = styled.div`
    width: 100%;

    ${Media.Tablet}{
        width: 90%;
        margin: auto;
    }
`

export const CapaVetor = styled.div`
    position: absolute;
    height: auto;
    top: 40%;
    left: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 70%;
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