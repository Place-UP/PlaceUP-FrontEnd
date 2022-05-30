import styled from "styled-components";
import FundoVetor from '../../Img/CadastroComerciante/Fundo_do_vetor.svg'

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BoxVetor = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    background-image: url(${FundoVetor});
    background-repeat: no-repeat;
    background-size: 100%;

`

export const Login = styled.section`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 10%;
    right: 60%;

    img{
        width: 150px;
        margin: auto;
    }

    button{
        border: 4px solid #fff;
        color: #fff;
        padding: 8px 50px;
        border-radius: 20px;
        font-size: 1.2rem;
        cursor: pointer;
    }
`

export const CapaVetor = styled.div`
    position: absolute;
    width: 100%; 
    height: auto;
    top: 40%;
    left: -10%;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 70%;
    }
`

export const BoxForm = styled.div`
    width: 50%;
`

export const Form = styled.form`
    width: 70%;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    legend{
        font-size: 3.5rem;
        color: #2980B9;
        font-family: 'Lato', sans-serif;
        font-weight: 500;
    }
`

export const Label = styled.label`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 5px solid #2980B9;
    margin-top: 80px;

    i{
        font-size: 1.75rem;
        color: #2980B9;
        cursor: pointer;
    }

    input{
        background-color: transparent;
        width: 100%;
        outline: none;
        padding-left: 15px;
    }
`

export const Remember = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`

export const Submit = styled.input`
    background-color: #2980B9;
    color: #fff;
    padding: 15px 55px;
    font-size: 1.4rem;
    border-radius: 40px;
    margin-top: 25px;
    cursor: pointer;

    &:hover{
        background-color: #2972A3;
    }
`

export const Senha = styled.div`
    color: #2980B9;
    font-weight: 500;
`

export const Termos = styled.div`
    margin-top: 40px;
    margin-bottom: 60px;
    text-align: center;

    a{
        color: #2980B9;
    }
`

export const SocialMidia = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 30px;

    ul{
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        li{
            font-size: 2.5rem;
            cursor: pointer;
            color: #2980B9;
        }
    }
`

