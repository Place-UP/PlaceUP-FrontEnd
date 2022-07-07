import styled from "styled-components";

export const Container = styled.div`
`

export const Line = styled.div`
    margin: 10px;
    display: flex;

    &.me{
        > div{
            background-color: #218531;
            color: ${({ theme }) => theme.fontColor};
        }
        justify-content: right;
    }
`

export const Content = styled.div`
    background-color: ${({ theme }) => theme.cards};
    color: ${({ theme }) => theme.fontColor};
    border-radius: 10px;
    box-shadow: 0 1px 1px #ccc;
    display: flex;
    flex-direction: column;
    padding: 5px;
    max-width: 80%;
    
`

export const Message = styled.span`
    font-size: 15px;
    padding: 5px 0;
    margin: 5px 40px 5px 5px;
`

export const MessageDate = styled.span`
    font-size: 10px;
    color: ${({ theme }) => theme.fontColor};
    text-align: right;
    height: 15px;
    margin: -5px 5px 0;
`