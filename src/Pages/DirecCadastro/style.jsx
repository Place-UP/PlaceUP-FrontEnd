import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F9F9F9;
    overflow: hidden;

    .c1{
        width: 100px;
        position: absolute;
        top: 0;
        left: 0;

    }

    .c2{
        width: 100px;
        position: absolute;
        top: 0;
        right: 0;

    }

    .c3{
        width: 100px;
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .seta{
        position: absolute;
        top: 0;
        left: 0;
        width: 80px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        z-index: 10;

        &:hover{
            transform: translateX(8px);
        }
    }
`

export const Box = styled.div`
    width: 35%;
    height: 90%;
    margin: 10px 50px 10px 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 10px 10px 50px 0 #8DCFDE;

    z-index: 10;

    img{
        width: 310px;
    }
    
    h1{
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 2rem;
        color: #2980B9;
        margin-top: 10%;
        margin-bottom: 10%;
    }

    button{
        position: relative;
        background-color: #4C3D3D;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover{
            width: 150px;

            a{
                transition: all 0.2s ease-in-out;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                padding-left: 10px;
            }

            span{
                display: block;
            }
        }

        a{
            position: relative;
            font-size: 1.2rem;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        span{
            font-weight: 500;
            display: none;
            padding-left: 10px;
        }
    }
`
