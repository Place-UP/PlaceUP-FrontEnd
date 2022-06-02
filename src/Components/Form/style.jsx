import styled from "styled-components";

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

    img{
        width: 20px;
        padding-right: 10px;
        vertical-align: middle;
       
    }

    .active{
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
    padding: 15px 55px;
    font-size: 1.4rem;
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

