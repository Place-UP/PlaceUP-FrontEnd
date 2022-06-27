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
    width: 25%;
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
    .EmptyCart{ 
      width: 50%;
    }
  }   
  
  ${media.Mobile} {
    .EmptyCart{ 
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
          font-size: 20px;
          font-weight: bold;

          ${media.Tablet} { font-size: 18px; }  

          ${media.Mobile} { font-size: 15px; }   
        }

        h2{
          margin-top: 10px;
          font-size: 17px;
          color: #A6A8A9;

          ${media.Tablet} { font-size: 15px; }  

          ${media.Mobile} { font-size: 13px; }  
        }
    }
`;