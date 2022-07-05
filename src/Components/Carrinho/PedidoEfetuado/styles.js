import styled from "styled-components";

const media = {
  Tablet: "@media(max-width: 935px)",
  Mobile: "@media(max-width: 435px)"
};

export const Section = styled.section`
  
  .OrderPlaced{
    position: fixed;
    top: 0;
    right: 0;
    max-width: 400px;
    width: 25%;
    height: 100%;
    background-color: ${({ theme }) => theme.cards};
    margin: auto;
    transition: width 0.5s;
    padding: 15px 0;
    z-index: 10;
  }

  .Close{
    color: #2980B9;
    width: 40px;
    height: 40px;
    margin-left: 25px;
    border-radius: 50%;
    

     &:hover{
      background-color: #F3ECEC;
    }
  }
  
  ${media.Tablet} {    
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