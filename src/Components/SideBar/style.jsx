import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    width: 25%;
    margin: auto;
    height: 100%;
    border-left: 4px solid #EDEAE2;
    background-color: #F8F8F8;
    right: 0;
    top: 0;
`

export const Search = styled.div`
    background-color: #EDEAEA;
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    padding: 10px;
    border-radius: 30px;

    i{
        color: #969292;
        font-size: 1.3rem;
        padding-right: 20px;
        
    }

    input{
        font-family: 'Poppins';
        outline: none;
        width: 100%;
        height: 100%;
        text-decoration: none;
        background-color: transparent;
        color: #969292;
    }
`