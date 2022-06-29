import styled from "styled-components";
import 'animate.css';

const Media = {
    Laptop: "@media(max-width: 1024px)"
}

export const Regis = styled.section`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 10%;
    right: 35%;


    img{
        width: 140px;
        margin: auto;
    }

    button{
        border: 4px solid #fff;
        color: ${({ theme }) => theme.fontColor};
        padding: 8px 30px;
        border-radius: 20px;
        font-size: 1.1rem;
        cursor: pointer;
    }
`