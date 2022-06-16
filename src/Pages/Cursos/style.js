import styled from "styled-components";

const Media = {
    MobileL: "@media(min-width: 425px)",
    Tablet: "@media(min-width: 768px)",
    Laptop: "@media(min-width: 1024px)"
}

export const Container = styled.main`
    width: 80%;
    height: 100%;
    margin-left: 20%;

    ${Media.MobileL}{
      width: 85%;
      margin-left: 15%;
    }

    ${Media.Tablet}{
        width: 90%;
        margin-left: 10%;
    }

    ${Media.Laptop} {
        width: 92%;
        margin-left: 8%;
    }
`

export const Box = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const Img = styled.img`
    position: absolute;
    right: 0;
    width: 150px;

    ${Media.MobileL}{
        width: 190px;
    }
`

export const BoxImg = styled.div`
    width: 100%;
    height: 100%;

    img{
        width: 120px;

        ${Media.MobileL}{
            width: 180px;
        }
    }

    p{
        font-family: 'Poppins';
        font-weight: 600;

        &::before{
            content: "";
            width: 40px;
            height: 3px;
            position: absolute;
            bottom: -5%;
            border-radius: 20px;
            background-image: linear-gradient(45deg, #637CDC, #9C5165);

        }

        span{
            font-family: 'Poppins';
            font-weight: 600;
            color: #2980B9;
        }
    }
`

export const BoxTitle = styled.div`
    width: 100%;
    margin-top: 15%;

    ${Media.MobileL}{
        margin-top: 10%;
    }

    p{
        font-weight: 600;
        font-size: 0.6rem;
    }
`

export const BoxSelect = styled.div`
    width: 100%;
    height: 100%;

    margin-top: 15%;

    select{
      width: 80%;
      border-radius: 10px;
      padding: 10px 0;
      margin: auto;
      font-size: 0.7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 15px;
      border: 0;
      outline: none;
    }
`

export const Calculator = styled.div`
    width: 90%;
    margin: auto;
    text-align: center;
    font-family: 'Poppins';
    margin-bottom: 10%;

    p{
        font-size: 0.6rem;
    }

    button{
        color: #fff;
        font-size: 0.7rem;
        border-radius: 0.5rem;
        background-color: #1776B4;
        padding: 10px 20px;
        margin-top: 10%;
        transition: all 0.3s ease-in-out;

        &:hover{
            background-color: #0B6CAA;
        }
    }
`