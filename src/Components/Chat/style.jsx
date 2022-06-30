import styled from "styled-components";

export const Container = styled.div`
    width: 70.3%;
    margin-left: 4.8%;
    background-color: ${({ theme }) => theme.barRight};
    height: 100vh;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.fontColor};
`