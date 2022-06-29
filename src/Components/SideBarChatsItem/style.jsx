import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 15px 20px;
    cursor: pointer;

    &:hover{
        background-color: ${({ theme }) => theme.body};
    }

    svg {
        width: 30px;
        height: 30px;
        background-color: #ccc;
        color: ${({ theme }) => theme.fontColor};
        border-radius: 50%;
        margin-right: 10px;
        min-width: fit-content;
    }

    &:active{
        background-color: #f0f2f5;
    }
`

export const Name = styled.span`
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 15px;
    color: ${({ theme }) => theme.fontColor};
`

export const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-top: 10px;
    min-width: fit-content;
`