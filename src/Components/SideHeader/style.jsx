import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 15%;
    border-bottom: 2px solid #ccc;
    padding: 10px 5px;
`

export const Avatar = styled.img`
    width: 60px;
    height: 60px;
    cursor: pointer;
    border-radius: 50%;
`

export const CreateContact = styled.div`
    width: 100%;
    height: auto;

    button{
        position: fixed;
        right: 3%;
        bottom: 5%;
        padding: 10px 15px;
        font-size: 1.3rem;
        box-sizing: border-box;
        border-radius: 30px;
        background-color: #4FCE63;
        color: #fff;
        cursor: pointer;
    }
`

