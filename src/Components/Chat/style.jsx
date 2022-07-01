import styled from "styled-components";

export const Container = styled.div`
    width: 71.4%;
    margin-left: 3.6%;
    background-color: ${({ theme }) => theme.barRight};
    height: 100vh;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.fontColor};
`