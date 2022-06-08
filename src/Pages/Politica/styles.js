import styled from "styled-components";

const media = {
  Tablet: "@media(max-width: 790px)",
  Mobile: "@media(max-width:675px)",
  MobileS: "@media(max-width:320px)",
};

export const Home = styled.div` 
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
    font-size: 25px; 
    padding: 50px 5px 10px 20px;
    font-weight: 800;    
    font-family: 'Bakbak One', cursive;
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
    font-size: 20px; 
    font-weight: 800;    
    font-family: 'Bakbak One', cursive;
    color: #297FB8;
  }

  .underlined{
    width: 5%;
    height: 5px;
    background-color: #297FB8;
    margin: 5px auto;
  }

  p{
    width: 50%;
    font-weight: 400;
    font-size: 20px;
    margin: 50px auto;
  }  
`;