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

export const Container = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Card = styled.div`
    margin-left: 5%;
`

export const TitleCard = styled.h1`
    color: #344758;
    font-size: 3.25rem;
    font-weight: 600;
    font-family: 'Bakbak One', cursive;
    margin-bottom: 1.5rem;

    span{
        color: #60BCCB;
        font-family: 'Bakbak One', cursive;
    }
`

export const ParagrafoCard = styled.p`
    font-size: 1.4rem;
    color: #344758;
    font-weight: 500;
    margin-bottom: 1.5rem;
`

export const BtnCard = styled.button`
    color: #fff;
    background: linear-gradient(to right, #60BDCC 0%, #CF71BF 100%);
    padding: 15px 50px;
    border-radius: 40px;
    cursor: pointer;
    margin-top: 1.7rem;
    margin-bottom: 1.7rem;
    box-shadow: 0px 5px 15px #C1FAFA;

    &:hover{
        transition: all 0.5s ease-in-out;
        opacity: 0.8;
    }
`

export const Midia = styled.ul`
    display: flex;  
    justify-content: flex-start;
    align-items: center;
    margin-top: 2rem;

    a{
        font-size: 2.5rem;
        color: #2980B9;
        margin-right: 20%;
        &:hover{
                transition: all 0.4s ease-in-out;
                transform: translate(0px, -8px);
                opacity: 0.5;
            }
    }
`

export const VetorCidade = styled.div`
    width: 100%;
`

