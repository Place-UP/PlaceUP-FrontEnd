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
      .containerProfile{
        width: 100%;
        display: block;
        text-align: center;
        margin: auto;
      }

      .profile{
        display: block;
        margin: 20px;

        img{
          width: 90px;
          height: 90px;
        }

        h1{
          margin: -20px 0px;
          font-size: 19px;
        }

        p{
          margin: 20px 0px;
        }
      }

      .cointanerProduto{    
        width: 90%; 
        img{ margin: 10px 0px;}    
      }

      .buttonVejaMais{  margin: 0;  }
    }    
  }
`

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Profile = styled.div`
  display: flex;
  flex-direction: row;

  img{
    width: 70px;
    height: 70px;
    margin-top: 30px;
    border-radius: 50%;
    cursor: pointer;
  }

  h1{
    cursor: pointer;    
    font-family: 'Lato', cursive;
    color: #297FB8;
    font-weight: bold;
    padding: 40px 5px 10px 5px;
  }

  p{
    line-height:-70px;
    cursor: pointer;    
    font-weight: 500;
    padding: 0px 5px 0px 5px;
    font-family: 'Lato', cursive;

    span{
      color: #297FB8; 
      font-weight: bold
    }
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  margin: 50px 15px 0px 0px;
  border-radius: 20px;
  font-size: 17px;
  color: #297FB8;
  cursor: pointer;
`

export const Produto = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 2% 30px 2%;
`

export const CointanerProduto = styled.div`
  width: 90%;
  
  img{
    max-width: 400px;
    padding: 0 2%;
  }
`;