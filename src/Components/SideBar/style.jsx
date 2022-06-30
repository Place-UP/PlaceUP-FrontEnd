import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    width: 25%;
    margin: auto;
    height: 100%;
    right: 0;
    background-color: ${({ theme }) => theme.barRight};
    top: 0;
`

export const Search = styled.div`
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.fontColor};
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    padding: 10px;
    border-radius: 30px;

    i{
        color: ${({ theme }) => theme.fontColor};
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
        color: ${({ theme }) => theme.fontColor};
    }
`