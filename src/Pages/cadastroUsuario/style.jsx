import styled from "styled-components";

const Media = {
    Laptop: "@media(min-width: 1024px)",
    Tablet: "@media(max-width: 768px)"
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BoxVetor = styled.div`
    position: relative;
    width: 45%;
    height: 100%;
    background-color: #2980B9;
    box-shadow: -20px 0  #A0D1DC;
    clip-path: polygon(34% 0, 100% 0, 100% 60%, 100% 100%, 14% 100%, 0% 60%, 12% 18%);
   

    ${Media.Tablet}{
        display: none;
    }
`

export const Form = styled.div`
    width: 50%;

    ${Media.Tablet}{
        width: 90%;
        margin: auto;
    }
`

export const CapaVetor = styled.div`
    position: absolute;
    width: auto; 
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