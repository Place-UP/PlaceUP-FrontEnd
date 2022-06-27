import styled from "styled-components";

const media = {
  Tablet: "@media(max-width: 935px)",
  Mobile: "@media(max-width: 435px)"
};

export const Section = styled.section`
  .OrderPlaced{
    position: fixed;
    right: 0pt;
    max-width: 400px;
    width: 23%;
    height: 100vh;
    background-color: ${({ theme }) => theme.cards};
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
    
    .OrderPlaced{ width: 50%;  }

    h1{ 
      font-size: 20px; 
      color: ${({ theme }) => theme.fontColor};

      ${media.Tablet} { font-size: 18px; }  

      ${media.Mobile} { font-size: 15px; }  
    }

    h2{ 
      font-size: 20px; 
      color: ${({ theme }) => theme.fontColor};

      ${media.Tablet} { font-size: 18px; }  

      ${media.Mobile} { font-size: 15px; }  
    }
  }   

  ${media.Mobile} {
    .OrderPlaced{ width: 100%;  }
  }
`

export const Confirmation = styled.div`
    position: relative;
    top: 35%;
    text-align: center;

    .ConfirmationContainer{      
      text-align: center;
     
        h1{
          font-size: 20px;
          color: ${({ theme }) => theme.fontColor};
          font-weight: bold;

          ${media.Tablet} { font-size: 18px; }  

          ${media.Mobile} { font-size: 15px; }  
        }

        h2{
          margin-top: 10px;
          font-size: 20px;
          color: ${({ theme }) => theme.fontColor};

          ${media.Tablet} { font-size: 18px; }  

          ${media.Mobile} { font-size: 15px; }  
        }

        img{ margin-top: 20px; }
    }
`;