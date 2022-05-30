import styled from "styled-components";

const media = {
  Tablet: "@media(max-width:900px)",
  Mobile: "@media(max-width:675px)",
  MobileS: "@media(max-width:400px)",
};

export const Feed = styled.div`
  margin: 0px 0px 40px 17%;
  max-width: 1400px;
  width: 60%;
  border-radius: 20px;
  background-color: white;

  ${media.Tablet} {    
    .produto {
      max-width: 300px;
      display: block;
      margin: 10px auto;

    .cointanerProduto{
      width: 100%;
    }
  
    img{
      width: 90%;
      margin: 0px 5px;
      box-shadow: none;
    }
    
    h1{
      width: 100%;
      font-size: 20px;      
      font-family: 'Lato', cursive;
      margin: 10px 5px;
    }
    
    p{
      color: #297FB8;
      font-size: 17px;
      font-family: 'Lato', cursive;
      margin: 10px 0px 20px 5px;
    }
  }

    ${media.Mobile} {
      width: 70%;

      .cointanerProduto{    
        width: 90%; 
        img{ margin: 10px 0px;}    
      }
    }    
  }
`

export const Produto = styled.div`
  width: 100%;
  padding: 10px 2% 30px 2%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 0px;
`

export const CointanerProduto = styled.div`
  width: 33%;
  
  img{
    width: 90%;
    max-width: 400px;
    border-radius: 20px;
    padding: 10px 2%;
    box-shadow: 10px 10px 10px rgb(180,180,180);
  }

  h1{
    width: 90%;
    text-align: left;
    font-size: 17px;
    padding: 20px 10px 0px 10px;    
    font-family: 'Lato', cursive;
  }

  p{
    font-family: 'Lato', cursive;
    text-align: left;
    color: #297FB8;
    font-size: 17px;
    padding-left: 10px;
  }
`;