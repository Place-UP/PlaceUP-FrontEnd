import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.cards};
`

export const Chat = styled.div`
    width: 65%;
    margin-left: 10%;
    background-color: ${({ theme }) => theme.body};
`