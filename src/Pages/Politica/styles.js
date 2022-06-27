import styled from "styled-components";

const media = {
  Tablet: "@media(max-width: 790px)",
  Mobile: "@media(max-width:675px)",
  MobileS: "@media(max-width:320px)",
};

export const Home = styled.div` 
  background-color: ${({ theme }) => theme.body};
  text-align: center;

  ${media.MobileS}{    
    p{width: 90%;}
  }
`;

export const Category = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px auto;

  h1{   
    font-size: 38px; 
    padding: 50px 5px 10px 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.fontColor};    
    font-family: 'Bakbak One', cursive;

    ${media.Tablet} { font-size: 36px; }  

    ${media.Mobile} { font-size: 32px; }  
  
    ${media.MobileS} { font-size: 28px; }  
  }

  img {
    width: 150px;
    height: 130px;
  }

  ${media.Mobile}{
    display: block;
    
    h1{padding: 10px 5px 10px 20px;}
  }
`;

export const Content = styled.div`
  h1{   
    width: 60%;
    font-size: 34px; 
    font-weight: 500;    
    font-family: 'Bakbak One', cursive;
    color: #297FB8;
    margin: 50px auto;

    ${media.Tablet} { font-size: 31px; }  

    ${media.Mobile} { font-size: 28px; }  
  
    ${media.MobileS} { font-size: 26px; }  
  }

  .underlined{
    width: 5%;
    height: 5px;
    background-color: #297FB8;
    margin: 5px auto;
  }

  p{
    width: 60%;
    font-weight: 400;
    font-size: 20px;
    margin: 50px auto;
    color: ${({ theme }) => theme.fontColor};

    ${media.Tablet} { font-size: 18px; }  

    ${media.Mobile} { font-size: 15px; }  
  
    ${media.MobileS} { font-size: 12px; }  
  }  

  ${media.Tablet}{    
    p{ 
      width: 80%;
    }
  }

  ${media.MobileS}{    
    p{width: 90%;}
  }
`;