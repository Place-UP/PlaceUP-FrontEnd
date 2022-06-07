import styled from "styled-components";

const media = {
  Tablet: "@media(max-width: 790px)",
  Mobile: "@media(max-width:675px)",
  MobileS: "@media(max-width:320px)",
};

export const Home = styled.div` 
  background-color: #ECF0F1;  
  ${media.MobileS}{
    margin-left: 10%;
    text-align: center;
  }
`;

export const Category = styled.div`
  max-width: 1400px;
  width: 50%;
  padding: 0px 0 30px 17%;

  h1{   
    font-size: 30px; 
    padding: 50px 5px 10px 5px;
    font-weight: 800;    
    font-family: 'Bakbak One', cursive;
  }
`;