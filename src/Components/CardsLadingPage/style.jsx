import styled from "styled-components";



export const Container = styled.div`

    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 10%;
`

export const Box = styled.div`
    position: relative;   
    width: 100%;
    height: 100%;
    margin: 20px;

    &:nth-child(2){
        margin-top: 20%;
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

   

        img{
       position: absolute;
       top: -30%;
       display: flex;
       justify-content: center;
       align-items: center;
       width: 40%;
       padding: 15px;
   }

   span{
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    margin-top: 40%;
   }

   p{
    text-align: center;
    margin: auto;
    font-weight: 600;
    margin-top: 20%;
    margin-bottom: 20%;
   
   }
    }
  
`