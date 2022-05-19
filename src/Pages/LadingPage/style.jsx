import styled from "styled-components";
import LocalVetor from './LocalDaLogo.svg'

export const Header = styled.header`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

export const HeaderImg = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
  
    div{
        position: relative;
        width: 585px;
        height: 210px;
        background-repeat: no-repeat;
        background: url(${LocalVetor});

        img{
        position: absolute;
        right: 60%;
        top: 5%;
        width: 160px;
        cursor: pointer;
    }
    }
    
`

export const Box = styled.div`
    width: 40%;
    height: auto;
`

export const Btn = styled.button`
    background-color: ${(props) => props.primary ? "var(--Azul-Escuro)" : "transparent"} ;
    border: ${(props) => props.primary ? "0px solid var(--Azul-Escuro)" : "3px solid var(--Azul-Escuro)"};
    color: ${(props) => props.primary ? "#fff" : "#000"} ;
    border-radius: 25px;
    box-sizing: border-box;
    height: 45px;
    width: 150px;
    cursor: pointer;
    margin-top: 20px;
    margin-right: 40px;
    transition: all 0.2s ease-in;

    &:hover{
        background-color: ${(props) => props.primary ? "#22597d" : "#F4F4F4"};
    }
`

