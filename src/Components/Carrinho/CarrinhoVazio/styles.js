import styled from "styled-components";

const media = {
  Tablet: "@media(max-width: 935px)",
  Mobile: "@media(max-width: 435px)"
};

export const Section = styled.section`
  .EmptyCart{
    position: fixed;
    right: 0pt;
    max-width: 400px;
    width: 23%;
    height: 100vh;
    background-color: #ECF0F1;
    margin: auto;
    transition: width 0.5s;
    padding-top: 30px; 
  }
  
  .Close{
    color: #2980B9;
    width: 40px;
    height: 40px;
    margin-left: 25px;
  }
  
  ${media.Tablet} {
    .CarrinhoVazio{ 
      width: 50%;
    }
  }   

  ${media.Mobile} {
    .CarrinhoVazio{ 
      width: 100%;
    }
  }
`

export const Cart = styled.div`
    position: relative;
    top: 40%;
    text-align: center;

    .cartContainer{      
      text-align: center;
     
        h1{
          font-size: 25px;
          font-weight: bold;
        }

        h2{
          margin-top: 10px;
          font-size: 23px;
          color: #A6A8A9;
        }
    }
`;