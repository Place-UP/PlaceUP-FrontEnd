import styled from "styled-components";

const Media = {
    Tablet: "@media(max-width: 768px)"
}

export const Container = styled.div`
    width: 70%;
    margin-left: 3.6%;
    background-color: ${({ theme }) => theme.barRight};
    height: 100vh;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.fontColor};

    ${Media.Tablet}{
        width: 100%;
    }
`