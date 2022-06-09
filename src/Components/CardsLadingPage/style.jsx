import styled from "styled-components";

const Media = {
    Laptop: "@media(max-width: 1024px)",
    Tablet: "@media(max-width: 768px)",
    MobileL: "@media(max-width: 425px)",
    MobileM: "@media(max-width: 375px)",
    MobileS: "@media(max-width: 32opx)"
}

export const Container = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    ${Media.Tablet}{
        width: 70%;
        height: 100%;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const Box = styled.div`
    position: relative;   
    width: 100%;
    height: 100%;
    margin: 20px;
    margin-top: 5%;

    ${Media.Tablet}{
        margin-top: 25%;
    }

    &:nth-child(2){
        margin-top: 20%;

        ${Media.Tablet}{
            margin-top: 20%;
        }
    }

    div{
    position: relative;   
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F8F6F6;
    border-radius: 40px;
    box-shadow: ${(props) => props.primary};

    ${Media.Laptop}{
        border-radius: 20px;
    }

    ${Media.Tablet}{
          width: 70%;
          height: 100%;
    }

    ${Media.MobileL}{
        width: 80%;
    }

    img{
       position: absolute;
       top: -30%;
       display: flex;
       justify-content: center;
       align-items: center;
       width: 40%;
       padding: 15px;

       ${Media.Laptop}{
            width: 35%;
        }

        ${Media.Tablet}{
          width: 30%;
        }
   }

   span{
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    margin-top: 40%;

    ${Media.Laptop}{
        font-size: 1.1rem;
    }

    ${Media.Tablet}{
        margin-top: 35%;
    }

    ${Media.MobileL}{
        font-size: 0.8rem;
    }
   }

   p{
    text-align: center;
    margin: auto;
    font-weight: 600;
    margin-top: 20%;
    margin-bottom: 20%;
    
    ${Media.Laptop}{
        width: 80%;
        font-size: 0.8rem;
    }

    ${Media.Tablet}{
        margin-top: 18%;
        margin-bottom: 18%;
        font-size: 1rem;
    }

    ${Media.MobileL}{
        font-size: 0.7rem;
    }
    
   }
}
  
`