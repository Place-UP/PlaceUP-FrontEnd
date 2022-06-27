import styled from "styled-components";

const media = {
  Tablet: "@media(max-width: 935px)",
  Mobile: "@media(max-width:675px)",
  MobileS: "@media(max-width:320px)",
};

export const Home = styled.div` 
  backgroundcolor: ${({ theme }) => theme.body};
  
  ${media.Tablet}{ margin-left: 15%; }

  ${media.MobileS}{    
    margin-left: 18%;
    text-align: center;
  }

  ${media.Mobile}{ margin-left: 15%; }
`;

export const Category = styled.div`
  max-width: 1400px;
  width: 50%;
  padding: 0px 0 30px 12%;

  h1{   
    font-size: 38px; 
    padding: 50px 5px 10px 5px;
    font-weight: 800;    
    font-family: 'Bakbak One', cursive;
    color: ${({ theme }) => theme.fontColor};

    ${media.Tablet}{ font-size: 36px; }

    ${media.MobileS}{ font-size: 32px; }
  
    ${media.Mobile}{ font-size: 28px; }
  }
`;