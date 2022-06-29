import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;

    div{
        position: absolute;
        top: 0;
        left: 48;
    }

    img {
        margin-top: 50px;
        width: 165px;
        height: 150px;
        z-index: 1;
    }      
`

export const Button = styled.button`
    outline: none;
    font-size: 18px;
    padding: 14px 18px;
    background-color: #fff;
    cursor: pointer;
    border-radius: 30px;
`