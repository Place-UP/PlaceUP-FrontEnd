import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 10%;
    margin-bottom: 10%;
`

export const Box = styled.section`
    width: 95%;
    height: 100%;
    margin: auto;
    background-color: #F8F8F8;
    box-shadow: 4px 4px 10px 1px #ccc;

`

export const PerfilFoto = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 25px 15px;

    span{
        width: 50%;
        font-size: 1.43rem;
        font-family: 'Poppins';
        font-weight: 600;
    }

    img{
        width: 50%;
        border-radius: 100px;
        width: 90px;
        height: 85px;
        object-fit: cover;
    }
`

export const Coment = styled.div`
    position: relative;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    margin: auto;

    h2{
        width: 80%;
        margin: auto;
        font-size: 1.25rem;
        text-align: center;

        &::before{
            content: '"';
            position: absolute;
            top: 20%;
            left: 0;
            font-family: 'Poppins';
            font-style: italic;
            font-size: 5rem;
            font-weight: 600;
        }
    
        &::after{
            content: '"';
            position: absolute;
            right: 0;
            bottom: 0;
            font-family: 'Poppins';
            font-style: italic;
            font-size: 5rem;
            font-weight: 600;
           
        }
    }
`
export const Txt = styled.div`
    position: relative;
    font-family: 'Bakbak One', cursive;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;

    &::after{
            content: '';
            position: absolute;
            bottom: -8px;
            width: 70px;
            height: 4px;
            background-color: #2980B9;
        }

    h1{
        color: #2D3E50;
        font-size: 2rem;
        font-weight: 700;

      
    }
`
