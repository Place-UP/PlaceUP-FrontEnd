import styled from "styled-components";

const Media = {
    Laptop: "@media(max-width: 1024px)",
    Tablet: "@media(max-width: 768px)",
}

export const Regis = styled.section`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 10%;
    right: 30%;

    ${Media.Laptop}{
        right: 20%;
    }

    img{
        width: 150px;
        margin: auto;

        ${Media.Laptop}{
            width: 120px;
        }
    }

    button{
        border: 4px solid #fff;
        color: #fff;
        padding: 8px 30px;
        border-radius: 20px;
        font-size: 1.2rem;
        cursor: pointer;

        ${Media.Laptop}{
            padding: 8px 20px;
            border-radius: 15px;
            font-size: 0.6rem;
        }
    }
`