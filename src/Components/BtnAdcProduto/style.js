import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    .active{
        display: block;
    }

    .none{
        display: none;
    }
`

export const BoxAdd = styled.div`
    position: fixed;
    bottom: 15%;
    right: 22%;

   
    button{
        position: absolute;
        right: 30%;
        background-color: #4FCE63;
        padding: 15px 20px;
        font-size: 2rem;
        box-sizing: border-box;
        border-radius: 50px;
        color: #fff;
        cursor: pointer;
    }
`

export const Modal = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    bottom: 18%;
    right: 21%;
    background-color: #fff;

   
    

    a{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        &:hover{
            border-bottom: 2px solid #000;
        }
    }
`