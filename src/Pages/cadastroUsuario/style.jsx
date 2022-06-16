import styled from "styled-components";

const Media = {
    Laptop: "@media(min-width: 1024px)",
    Tablet: "@media(max-width: 768px)"
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`

export const BoxVetor = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Form = styled.div`
    width: 50%;

    ${Media.Tablet}{
        width: 90%;
        margin: auto;
    }
`

export const Vetores = styled.div`
    position: relative;
    right: 0;
    width: 50%;
    height: 100%;

    ${Media.Tablet}{
        display: none;
    }
    
`

export const Img = styled.img`
    position: relative;
`

export const CapaVetor = styled.div`
    position: absolute;
    width: auto; 
    height: auto;
    top: 40%;
    left: 18%;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 75%;
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