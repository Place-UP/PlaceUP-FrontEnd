import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    margin-top: 10%;
`
export const Courses = styled.div`
    width: 100%;
    height: 100%;
`

export const Paragraph = styled.div`
    
    margin: 15% 0;

    h1{
        position: relative;
        font-weight: 700;
        font-size: 1.2rem;

        &::before{
            content: "";
            position: absolute;
            width: 50px;
            height: 3px;
            border-radius: 30px;
            background-color: red;
            bottom: -20%;
            background-image: linear-gradient(to bottom, rebeccapurple, steelblue, turquoise);
        }
    }

    p{
        font-size: 0.6rem;
        padding-top: 1.2rem;
    }
`

export const TxtBox = styled.div`
    text-align: center;
    margin-bottom: 5%;

    h2{
        font-size: 0.7rem;
        background-image: linear-gradient(to bottom, rebeccapurple, steelblue, turquoise);
         background-clip: text;
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
    }

    p{
        font-size: 0.6rem;
        color: #000000;
    }
`

export const Box = styled.div`
    width: 90%;
    margin: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 1.5rem;
    
    border-right: 2px solid #2575A9;
`

export const BoxImg = styled.div`
    width: 50%;
    height: 100%;

     img{
        width: 100px;
    }
`

export const Txt = styled.div`
    width: 50%;

    span{
        font-size: 0.7rem;
        font-family: 'Poppins';
        font-weight: 600;
    }

    p{
        
        color: #2980B9;
        font-size: 0.6rem;
    }
`