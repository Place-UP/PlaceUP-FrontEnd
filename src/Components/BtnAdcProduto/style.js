import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    .active{
        display: block;
    }

    .none{
        display: none;
    }
    
    .Box{
        padding: 30px 20px;
    }
`

export const BoxAdd = styled.div`
    position: fixed;
    bottom: 10%;
    right: 24.2%;

   
    button{
        position: absolute;
        right: 30%;
        background-color: #4FCE63;
        width: 75px;
        height: 75px;
        font-size: 2rem;
        box-sizing: border-box;
        border-radius: 50px;
        color: #fff;
        cursor: pointer;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`

export const Modal = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.cards};
    border-radius: 15px;
    bottom: 20%;
    right: 20.5%;

    a{
        color: ${({ theme }) => theme.fontColor};
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        
        &:hover{
            transition: all 0.1s ease; 
            border-bottom: 2px solid #000;
        }
    }
`