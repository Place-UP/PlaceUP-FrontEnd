import styled from "styled-components";
import LocalVetor from './LocalDaLogo.svg'


const Media = {
    Tablet: "@media(max-width: 1024px)",
    TabletM: "@media(max-width: 768px)",
    MobileM: "@media(max-width: 425px)",
    MobileS: "@media(max-width: 320px)",
}

export const Header = styled.header`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    overflow: hidden;

    .nav-bar{
        ${Media.Tablet}{
            width: 20%;
            height: 100%;
        }
        
        ${Media.TabletM}{
            width: 30%;

        }
    }

    .item{
            ${Media.Tablet}{
            position: absolute;
            bottom: -8%;
            right: -40%;
            display: flex;
            flex-direction: column;
            align-items: center;
            transform: translateX(100%);
            transition: all 0.45s;
        }
            ${Media.TabletM}{
                right: -35%;
            }
    }

    .item.open {
        transform: translateX(0);
    }

    .Hamburguer{
        position: relative;
        width: 55px;
        height: 50px;
        background-color: #f4f4f4;
        box-shadow: 0 10px 20px #ccc;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        display: none;
        overflow: hidden;
        
        ${Media.Tablet}{
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 5%;
        }
    }
    

    .Hamburguer span {
        position: absolute;
        width: 30px;
        height: 3px;
        border-radius: 40px;
        background-color: #000;
        transition: 0.5s ;
 
    }

    .Hamburguer span:nth-child(1){
        transform: translate(-10px, -12px);
        width: 15px;
        right: 15px;
    }
    .Hamburguer span:nth-child(2){
        transform: translate(-10px, 12px);
        width: 15px;
        right: 15px;
    }

    .Hamburguer.open span:nth-child(3) {
        ${Media.Tablet}{
            transform:  translateX(60px);
        }
    }

    .Hamburguer.open span:nth-child(1) {
        ${Media.Tablet}{
            width: 25px;
            transform:  translateY(0px) rotate(140deg);
        }
    }

    .Hamburguer.open span:nth-child(2) {
        ${Media.Tablet}{
            width: 25px;
            transform:  translateY(0px) rotate(45deg);
        }
    }

`


export const HeaderImg = styled.div`
    position: relative;
    width: 60%;
    height: 100%;

    ${Media.Tablet}{
        width: 50%;
    }

  
    div{
        position: relative;
        width: 585px;
        height: 210px;
        background-repeat: no-repeat;
        background: url(${LocalVetor});

        ${Media.Tablet}{
            width: 585px;
            background-size: 75%;
            background-repeat: no-repeat;
        }

        ${Media.MobileM}{
                background-size: 45%;
        }
        
        img{
            position: absolute;
            right: 60%;
            top: 5%;
            width: 160px;
            cursor: pointer;

            ${Media.Tablet}{
                width: 110px;
                right: 70%;
            }

            ${Media.MobileM}{
                width: 65px;
                right: 83%;
            }

        }
    }
    
`

export const Box = styled.div`
    position: relative;
    text-align: ${(props) => props.primary ? "right" : "left"};
    width: ${(props) => props.primary ? "50%" : "60%"};
    overflow: hidden;

    img{
        width: 100%;
    }

    ${Media.Tablet}{
        width: 100%;

        img{
            width: 200px;
        }
    }
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
    margin: 20px 20px;
    transition: all 0.2s ease-in;


    &:hover{
        background-color: ${(props) => props.primary ? "#22597d" : "#F4F4F4"};
    }


    ${Media.Tablet}{
        height: 45px;
        width: 125px;
    }

`

export const Container = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: ${(props) => props.primary ? "200px" : "0"};

    ${Media.Tablet}{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: ${(props) => props.primary ? "100px" : "0"};
    }
`

export const Cenarios = styled.img`
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -2;
`

export const Card = styled.div`
    margin-left: 5%;

    ${Media.Tablet}{
        margin-left: 5%;
        margin-right: 5%;
    }
`

export const TitleCard = styled.h1`
    color: #344758;
    font-size: 3.25rem;
    font-weight: 600;
    font-family: 'Bakbak One', cursive;

    margin-bottom: 3.5rem;

    ${Media.Tablet}{
        font-size: 2.5rem;
    }

    ${Media.MobileM}{
        margin-bottom: 1.8rem;
        font-size: 2rem;
    }

    span{
        color: #60BCCB;
        font-family: 'Bakbak One', cursive;
    }
`

export const ParagrafoCard = styled.p`
    font-size: 1.4rem;
    color: #344758;
    font-weight: 500;
    margin-bottom: 3.5rem;

    ${Media.Tablet}{
        font-size: 1.1rem;
    }

    ${Media.MobileM}{
        font-size: 1rem;
        margin-bottom: 2rem;
    }
`

export const BtnCard = styled.button`
    color: #fff;
    font-size: 1.2rem;
    background: ${(props) => props.primary ? "linear-gradient(to right, #60BDCC 0%, #CF71BF 100%);" : "var(--Azul-Escuro)"};
    padding: 15px 55px;
    border-radius: 40px;
    cursor: pointer;
    margin-top: 1.7rem;
    margin-bottom: 2.5rem;
    box-shadow: 0px 5px 15px #C1FAFA;
    z-index: 10;

    ${Media.Tablet}{
        padding: 15px 45px;
        font-size: 1rem;
    }

    ${Media.MobileM}{
        padding: 15px 30px;
        font-size: 0.7rem;
    }

    &:hover{
        transition: all 0.5s ease-in-out;
        opacity: 0.8;
    }
`

export const Midia = styled.ul`
    display: flex;  
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;

    ${Media.Tablet}{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10%;
    }

    a{
        font-size: 2.5rem;
        color: #2980B9;

        ${Media.Tablet}{
            font-size: 3rem;
        }

        ${Media.MobileM}{
            font-size: 1.8rem;
        }
        
        &:hover{
                transition: all 0.4s ease-in-out;
                transform: translate(0px, -8px);
                opacity: 0.5;
            }
    }
`

export const VetorCidade = styled.div`
    width: 100%;

    ${Media.Tablet}{
        display: none;
    }
`

export const ContentRight = styled.div`
    width: 80%;
    height: 100%;
`

export const CenarioRightStyle = styled.img`
      position: absolute;
        top: 0;
        right:0;
        width: 10%;
`

export const CenarioLeftStyle = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 10%;
`

export const ContentText = styled.article`
    font-family: 'Bakbak One', cursive;
    width: 60%;
    height: 100%;
    margin: auto;
    text-align: center;
    
    h1{
        font-family: 'Bakbak One', cursive;
        font-weight: 500;
        font-size: 2.5rem;
        color: #2D3E50;

        ${Media.TabletM}{
            font-size: 2rem;
        }
    }

    p{
        margin-top: 2.5rem;
        margin-bottom: 2rem;
        font-weight: 300;
        font-size: 1.2em;
        
        ${Media.TabletM}{
            font-size: 1rem;
        }
    }
`

