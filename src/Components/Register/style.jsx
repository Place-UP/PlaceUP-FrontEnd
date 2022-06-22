import styled from "styled-components";



export const Regis = styled.section`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    top: 10%;
    right: 35%;
    transform: scale(-1, 1);

    img{
        margin: auto;
    }

    button{
        border: 4px solid #fff;
        color: #fff;
        padding: 8px 30px;
        border-radius: 20px;
        font-size: 1.2rem;
        cursor: pointer;
    }
`