import styled from "styled-components";

const Media = {
    MobileL: "@media(min-width: 425px)",
    Tablet: "@media(min-width: 768px)",
    Laptop: "@media(min-width: 1024px)"
}

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 15%;
    border-bottom: 1px solid #ccc;
    padding: 10px 15px;
`

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
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
        color: ${({ theme }) => theme.fontColor};
        cursor: pointer;
    }
`
