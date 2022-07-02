import styled from "styled-components";

const media = {
  Tablet: "@media(max-width: 935px)",
  Mobile: "@media(max-width:675px)",
  MobileS: "@media(max-width:320px)",
};

export const Feed = styled.div`
  margin: 0px 0px 40px 12%;
  max-width: 1400px;
  width: 60%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.cards};

  ${media.Tablet} {        
    width: 70%;

    .product {
      max-width: 300px;
      display: block;
      margin: 10px auto;

    .cointanerProduct{
      width: 100%;
    }
  
    img{
      width: 90%;
      margin: 0px 5px;
    }
    
    h1{
      width: 90%;
      font-size: 17px;      
      font-family: 'Lato', cursive;
      margin: 10px 5px;
    }
    
    p{      
      font-size: 17px;
      font-family: 'Lato', cursive;
      margin: 10px 0px 20px 5px;
    }
  }

    ${media.Mobile} {
      width: 70%;
      padding: 0px 2%;

      .cointanerProduct{    
        width: 80%; 
        img{ margin: 10px 0px;}    
      }
    }    
  }
`

export const Product = styled.div`
  width: 100%;
  padding: 10px 2% 30px 2%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 0px;
`

export const CointanerProduct = styled.div`
  width: 33%;  
  
  img{
    width: 90%;
    max-width: 400px;
    max-height: 400px;
    object-fit: contain;
    border-radius: 30px;    
    padding: 10px 6%;
  }

  h1{
    width: 90%;
    text-align: left;
    font-size: 17px;     
    padding: 5px 7%;   
    font-family: 'Lato', cursive;
    color: ${({ theme }) => theme.fontColor};
  }

  p{
    font-family: 'Lato', cursive;
    text-align: left;
    color: #297FB8;
    font-size: 17px;     
    padding: 0px 7% 20px 7%;
  }  
`;