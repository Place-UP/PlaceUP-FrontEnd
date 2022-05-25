import styled from "styled-components";

const media = {
  Tablet: "@media(max-width: 935px)",
  Mobile: "@media(max-width: 435px)"
};

export const Section = styled.section`
  .PedidoEfetuado{
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
    display: none;
    
    .PedidoEfetuado{ 
      width: 50%;
    }

    h1{ font-size: 20px; }

    h2{ font-size: 20px; }
  }   

  ${media.Mobile} {
    .PedidoEfetuado{ 
      width: 100%;
    }
  }
`

export const Confirmacao = styled.div`
    position: relative;
    top: 35%;
    text-align: center;

    .confirmacaoContainer{      
      text-align: center;
     
        h1{
          font-size: 23px;
          font-weight: bold;
        }

        h2{
          margin-top: 10px;
          font-size: 23px;
          color: #A6A8A9;
        }

        img{
          margin-top: 20px;
        }
    }
`;