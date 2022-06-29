import styled from "styled-components";
import { keyframes } from "styled-components";

const Media = {
    MobileL: "@media(min-width: 425px)",
    Tablet: "@media(min-width: 768px)",
    Laptop: "@media(min-width: 1024px)"
}

export const Container = styled.main`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const Box = styled.div`
    width: 100%;
    height: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

export const Header = styled.header`
    width: 100%;
    height: 100%;
    display: flex;
`

export const Logo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 10;
    img{
        margin: 10px 0px 0px 20px;
        width: 50px;
        padding: 0px 10px 10px 0px;
        cursor: pointer;
        transition: 0.3s ease-in;
        &:hover{
            transform: translate(-6px);
        }
    }
`

const SubaAnimaOndulacao = keyframes`
    to{
        opacity: 1;
        transform: translate(0, 0);
    } 
    
    from{
        opacity: 0;
        transform: translate(2000px, -2000px);
    }
`

const aparecaForm = keyframes`
    to {
        opacity: 1;
    }

    from{
        opacity: 0;
    }
`

const EstrelaAnima = keyframes`
   to{
    transform: rotate(0deg);
   }

   from{
    transform: rotate(360deg);
   }
`


const BolinhaAparece = keyframes`
   to{
       opacity: 1;
   }

   from{
       opacity: 0;
   }
`

export const Ondinha = styled.img`
    width: 35%;
    top: ${(props) => props.primary ? "-11px" : "0"};
    right: 0;
    position: absolute;
    z-index: ${(props) => props.primary ? "-11" : "-10"}
`

export const Estrela = styled.img`
    width: 30px;
    position: absolute;

`

export const Bolinha = styled.img`
    width: 60px;
    position: absolute;
    top: 48%;
    left: 10%;
`

export const Ondulacao = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    ${Ondinha}{
        animation: 2s ${SubaAnimaOndulacao} ;
    }

    ${Estrela}#Estrela1{
        top: 5%;
        left: 15%;
        animation: 7s ${EstrelaAnima} linear infinite;
    }

    ${Estrela}#Estrela2{
        top: 40%;
        left: 26%;
        animation: 7s ${EstrelaAnima} linear infinite;
    }

    ${Estrela}#Estrela3{
        top: 80%;
        left: 10%;
        animation: 7s ${EstrelaAnima} linear infinite;
    }

    ${Bolinha}{
        animation: 2s ${BolinhaAparece};
    }

    @media screen and (max-width: 480px) {
        display: none;
    }
`

export const Formulario = styled.form`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: 1.4s ${aparecaForm} ease-in;
    
    ${Media.Tablet}{
        width: 70%;
    }

    ${Media.Laptop}{
        width: 40%;
    }

    input[type=submit]{
        width: 69%;
        height: 55px;
        color: ${({ theme }) => theme.fontColor};
        margin: auto;
        background-color: var(--Azul-Escuro);
        margin-top: 40px;
        margin-bottom: 40px;
        border-radius: 50px;
        font-size: 1.2em;
        cursor: pointer;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        &:disabled {
            cursor: not-allowed;
            background-color: gray;

        }

        @media screen and (min-width: 425px) {
            display: flex;
            justify-content: center;
            align-items: center;
            
            font-size: 1rem;
            width: 50%;
        }
      
    }
`

export const Icon = styled.span`
    font-size: 1.5em;
    color: var(--Azul-Escuro);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;   
    margin: 0 6px;
`

export const Legend = styled.legend`
    text-align: center;
    font-size: 1.6em;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.fontColor};
    margin-bottom: 60px;

    ${Media.MobileL}{
        font-size: 2.2rem;
    }
    
`

export const OR = styled.div`
    text-align: center;
    animation: 1s ${aparecaForm} ease-in;
    span{
        color: ${({ theme }) => theme.fontColor};
        position: relative;
        font-weight: 600;
        font-size: 1.1em;

        &::before, &::after{
            position: absolute;
            content: '';
            height: 1px;
            width: 12rem;
            bottom: 50%;
            right: 50px;
            background-color: black;

            @media screen and (max-width: 460px) {
            width: 100px;
            }
        }

        &::after{
            left: 50px;
        }

       
    } 
`

export const LabelBox = styled.label`
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${(props) => props.primary ? "80px" : "0"};
    border-bottom: 5px solid var(--Azul-Escuro);
`

export const CampoInput = styled.input`
    width: 100%;
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.fontColor};
`

export const BoxMidia = styled.div`
    width: 100%;
    height: 100%;
`

export const Social = styled.div`
    margin-top: 20px;
`

export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    animation: 1s ${aparecaForm} ease-in;
`

export const SocialMidia = styled.li`
    font-size: 2.5rem;
    color: var(--Azul-Escuro);
    cursor: pointer;
    margin-left: 2em;
    transition: all 0.3s ease-in;

    &:hover{
        color: var(--Azul-Hover);
        transform: translateY(-5px)
    }

    &:first-child {
        margin-left: 0;
    }

    @media screen and (max-width: 425px) {
        font-size: 2rem;
        margin-left: 1.9rem;
    }
`

const AparecaWave = keyframes`
    to{
        opacity: 1;
    }

    from{
        opacity: 0;
    }
`

const AnimaWave = keyframes`
    0%{
        background-position-x: 1000px;
    }

    100%{
        background-position-x: 0;
    }
`

export const Waves = styled.div`
    position: relative;
    width: 100%;
    min-height: -10px;
    padding: 25px 40px;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const Wave = styled.div`
  
`

export const FooterOnda = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    min-height: 100vh;
    overflow: hidden;

    ${Wave}{
        position: absolute;
        left: 0;
        width: 100%;
        height: 100px;
    }

    ${Wave}#Wave1{
        top: -15px;
        opacity: 1;
        bottom: 0;
        animation: 21s ${AnimaWave} linear  infinite ;
        z-index: 11;
        background: url(/Img/Wave01.svg);
        background-size: 1000px;
    }
    ${Wave}#Wave2{
        top: -25px;
        opacity: 1;
        bottom: 0;
        animation: 19.5s  ${AnimaWave} linear  infinite ;
        z-index: 10;
        background: url(/Img/Wave02.svg);
        background-size: 1000px;
    }
    ${Wave}#Wave3{
        top: -40px;
        opacity: 1;
        bottom: 0;
        animation: 22.5s  ${AnimaWave} linear  infinite;
        z-index: 9;
        background: url(/Img/Wave03.svg);
        background-size: 1000px;
    }

    @media screen and (max-width: 480px) {
        display: none;
    }
`


export const IconeValidacao = styled.i`
    width: 20px;
    
`