import styled from "styled-components";
import 'animate.css';

const Media = {
    MobileL: "@media(min-width: 425px)"
}

export const Form = styled.form`
    width: 80%;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    animation: fadeInDown 1.2s ease-in-out;

    a{
        width: 50%;
        text-align: center;
    }

    legend{
        font-size: 2rem;
        color: #2980B9;
        font-family: 'Lato', sans-serif;
        font-weight: 500;

        ${Media.MobileL}{
            font-size: 3rem;
        }
    }
`

export const Termos = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center;

    a{
        color: #2980B9;
    }
`

export const Label = styled.label`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 5px solid #2980B9;
    margin-top: 50px;

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

    img{
        width: 20px;
        padding-right: 10px;
        vertical-align: middle;
       
    }

    .active{
        display: flex;
    }

    .error{
        display: none;
    }

    .sucess{
        display: none;
    }

    .sucessActive{
        display: flex;
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
    width: 100%;
    height: 50px;
    font-size: 1rem;
    border-radius: 40px;
    margin-top: 25px;

    cursor: pointer;

    &:disabled{
        cursor: not-allowed;
        background-color: gray;
    }

    &:hover{
        background-color: #2972A3;
    }
`

