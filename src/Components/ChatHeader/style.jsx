import styled from "styled-components";

const Media = {
    Tablet: "@media(max-width: 768px)",
}

export const Container = styled.div`
    height: 70px;
    background-color: ${({ theme }) => theme.cards};
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-right: 2px solid #ccc;
    box-shadow: 0 1px 2px #0003;
    z-index: 1;
    box-sizing: border-box;

    ${Media.Tablet}{
        width: 85%;
        margin-left: 10%;
        box-shadow: none;
        border-right: none;
    }
`
export const UserInfo = styled.div`
    display: flex;
    align-items: center;

    svg{
        width: 65px;
        height: 65px;
        background-color: #ccc;
        border-radius: 50%;
        margin-right: 10px;
        min-width: fit-content;
    }
`
export const NameContent = styled.div`
    display: grid;
`

export const Name = styled.span`
    font-family: 'Poppins';
    font-size: 18px;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.fontColor};
`

export const Avatar = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
`

export const Menu = styled.div`
    display: none;
    button{
        color: #2980B9;
        font-size: 2rem;
    }

    ${Media.Tablet}{
        display: block;
    }
`

