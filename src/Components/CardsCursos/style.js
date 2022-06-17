import styled from "styled-components";

const Media = {
    MobileL: "@media(min-width: 425px)",
    Tablet: "@media(min-width: 768px)",
    Laptop: "@media(min-width: 1024px)"
}

export const Container = styled.div`
    width: 100%;
    height: 100%;

    margin-top: 10%;
`

export const Paragraph = styled.div`
    
    margin: 15% 0;

    ${Media.Laptop}{
        margin: 5% 0;
    }

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
         ${Media.MobileL}{
            font-size: 1.4rem;
         }

         ${Media.Tablet}{
            font-size: 2rem;
         }

         
         
    }

    p{
        font-size: 0.6rem;
        padding-top: 1.2rem;
        
        ${Media.MobileL}{
            font-size: 0.8rem;
        }

        ${Media.Tablet}{
            font-size: 1.3rem;
        }
    }
`

export const Courses = styled.div`
    width: 100%;
    height: 100%;

    &:nth-child(2){
        
    }
`

export const TxtBox = styled.div`
    text-align: center;
    margin-top: 5%;
    margin-bottom: 1.5rem;

    h2{
        font-size: 0.7rem;
        background-image: linear-gradient(to bottom, rebeccapurple, steelblue, turquoise);
         background-clip: text;
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;

         ${Media.MobileL}{
            font-size: 1.2rem;
         }

         ${Media.Tablet}{
            font-size: 2rem;
         }
         
         ${Media.Tablet}{
            font-size: 3rem;
         }
    }

    p{
        font-size: 0.6rem;
        color: #000000;
        padding-top: 10px;
        
        ${Media.MobileL}{
            font-size: 0.8rem;
        }

        ${Media.Tablet}{
            font-size: 1.2rem;
        }
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
    border-radius: 15px;
    margin-bottom: 1.5rem;
    
    border-right: 5px solid #2575A9;

    ${Media.Tablet}{
        border-radius: 25px;
    }

    ${Media.Laptop}{
        border-radius: 35px;
    }
`

export const BoxImg = styled.div`
    width: 50%;
    height: 100%;

     img{
        width: 100%;
    }
`

export const Txt = styled.div`
    width: 45%;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    span{
        
        font-size: 0.7rem;
        font-family: 'Poppins';
        font-weight: 600;

        ${Media.MobileL}{
            font-size: 1rem;
        }

        ${Media.Tablet}{
            font-size: 1.4rem;
        }

        ${Media.Laptop}{
            font-size: 2.2rem;
        }
    }

    p{
        width: 100%;
        text-align: center;
        color: #2980B9;
        font-size: 0.5rem;
        margin-top: 5%;

        ${Media.MobileL}{
            font-size: 0.7rem;
        }
        
        ${Media.Tablet}{
            font-size: 1rem;
            margin-top: 10%;
        }

        ${Media.Laptop}{
            font-size: 1.6rem;
        }
    }
`