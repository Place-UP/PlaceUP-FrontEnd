import styled from "styled-components";

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
    justifty-content: center;

    img{
        margin: 10px 0px 0px 20px;
        width: 8%;
        cursor: pointer;
    }
`

export const Ondulacao = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    
`

export const Ondinha = styled.img`
    width: 35%;
    top: ${(props) => props.primary ? "-11px" : "0"};
    right: 0;
    position: absolute;
    z-index: ${(props) => props.primary ? "-1" : "1"}
    `

export const Ondas = styled.img`
    position: absolute;
    bottom: -15%;
`

export const Estrela = styled.img`
    width: 50px;
    position: absolute;
    left: ${(props) => props.primary ? "15%" : "25%"};
    top: ${(props) => props.primary ? "5%" : "40%"} ;
`



export const Formulario = styled.form`
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;


    input[type="submit"]{
        width: 190px;
        height: 55px;
        padding: 13px 5px;
        color: #fff;
        margin: auto;
        background-color: var(--Azul-Escuro);
        margin-top: 40px;
        margin-bottom: 40px;
        border-radius: 50px;
        font-size: 1.2em;
        cursor: pointer;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


        &:hover{
            background-color: var(--Azul-Hover);
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
    font-size: 2.35em;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    color: var(--Azul--legend);
    margin-bottom: 60px;
    
`

export const OR = styled.div`
    text-align: center;
    
    span{
        position: relative;
        font-weight: 600;
        font-size: 1.1em;

        &::before, &::after{
            position: absolute;
            content: '';
            height: 1px;
            width: 200px;
            bottom: 50%;
            right: 50px;
            background-color: black;
        }

        &::after{
            left: 50px;
        }
    } 
`

export const LabelBox = styled.label`
    width: 65%;
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
`

export const Social = styled.div`
    margin-top: 20px;
`

export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
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
`
