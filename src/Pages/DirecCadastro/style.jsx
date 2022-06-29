import styled from "styled-components";

const Media = {
    Laptop: "@media(max-width: 1024px)",
    Tablet: "@media(max-width: 768px)",
    MobileL: "@media(max-width: 560px)",
    MobileM: "@media(max-width: 375px)",

}

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: color: ${({ theme }) => theme.body};
    overflow: hidden;
    

    ${Media.MobileL}{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

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
        color: ${({ theme }) => theme.fontColor};

        &:hover{
            transform: translateX(8px);
        }

        ${Media.MobileL}{
            width: 60px;
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
    background-color: ${({ theme }) => theme.cards};
    border-radius: 15px;
    box-shadow: 10px 10px 50px 0 #8DCFDE;
    transition: all 0.1s ease-in-out;
    z-index: 10;

    ${Media.Laptop}{
        width: 45%;
        margin: 10px 30px 10px 30px;
        height: 80%;
    }

    ${Media.Tablet}{
        width: 60%;
        margin: 5px 15px 5px 15px;
        height: 70%;
    }

    ${Media.MobileL}{
        margin: 20px 0;
        height: 45%;
    }

    img{
        width: 310px;

        ${Media.Laptop}{
            width: 220px;
        }

        ${Media.Tablet}{
           width: 160px;
        }

        ${Media.MobileL}{
            width: 120px;
        }
    }
    
    h1{
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 2rem;
        color: #2980B9;
        margin-top: 10%;
        margin-bottom: 10%;

        ${Media.Laptop}{
            font-size: 1.7rem;
        }

        ${Media.MobileL}{
            font-size: 1.2rem;
        }
    }

    button{
        position: relative;
        background-color: #4C3D3D;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        ${Media.MobileL}{
            width: 40px;
            height: 40px;
        }

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
