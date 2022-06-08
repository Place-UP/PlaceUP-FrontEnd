import styled from "styled-components";

const Media = {
    Laptop: "@media(max-width: 1024px)",
    Tablet: "@media(max-width: 768px)",
    MobileL: "@media(max-width: 425px)",
    MobileM: "@media(max-width: 375px)",
    MobileS: "Media(max-width: 320px)"
}

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10%;
    overflow-X: auto;
    padding-top: 30px;
    scroll-behavior: smooth;
    padding-top: 30px;
    padding-bottom: 20px;

    &::-webkit-scrollbar{
        display: none;
    }
`

export const Buttons = styled.div`
    position: relative;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 10%;

    button{
        cursor: pointer;
        font-size: 2rem;
        margin-right: 10px;
        &:hover{
            font-size: 1.9rem;
            opacity: 0.8;
        }
    }

    button:nth-child(1){
        margin-right: 20px;
    }
`

export const Box = styled.section`
    width: 40%;
    height: 100%;
    margin: auto;
    margin-right: 20px;
    background-color: #F8F8F8;
    box-shadow: 4px 4px 10px 1px #ccc;
    border-radius: 10px;
    margin-left: 15px;
    flex: none;

    ${Media.Tablet}{
        width: 80%;
    }

    ${Media.MobileL}{
        margin-right: 5px;
        width: 95%;
    }
`

export const PerfilFoto = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px 25px;

    ${Media.Tablet}{
        padding: 15px 10px;
    }

    span{
        width: 50%;
        font-size: 1.43rem;
        font-family: 'Poppins';
        font-weight: 600;
        text-align: center;

        ${Media.Tablet}{
            font-size: 1.2rem;
        }


        ${Media.MobileL}{
            font-size: 1rem;
        }
    }

    img{
        width: 50%;
        border-radius: 100px;
        width: 60px;
        height: 60px;
        object-fit: cover;

        ${Media.Tablet}{
            width: 70px;
            height: 70px;
        }
        ${Media.MobileL}{
            width: 55px;
            height: 55px;
        }
    }

    
`

export const Coment = styled.div`
    position: relative;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 280px;
    margin: auto;

    ${Media.Tablet}{
        height:250px;
    }

    ${Media.MobileM}{
        height: 150px;
    }

    h2{
        width: 80%;
        margin: auto;
        font-size: 1.25rem;
        text-align: center;

        ${Media.MobileL}{
            font-size: 1rem;
        }
        
        ${Media.MobileM}{
            font-size: 0.8rem;
        }

        &::before{
            content: '"';
            position: absolute;
            top: 15%;
            left: 0;
            font-family: 'Poppins';
            font-style: italic;
            font-size: 5rem;
            font-weight: 600;
            ${Media.Tablet}{
                font-size: 3.5rem;
            }

            ${Media.MobileM}{
                font-size: 2rem;
            }

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
            ${Media.Tablet}{
                font-size: 3.5rem;
            }

            
            ${Media.MobileM}{
                font-size: 2rem;
            }
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
        
        ${Media.Tablet}{
            font-size: 1.5rem;
        }
    }
`
