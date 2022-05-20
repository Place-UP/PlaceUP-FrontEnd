import styled from "styled-components";

const media = {
  Tablet: "@media(max-width:900px)",
  Mobile: "@media(max-width:675px)",
  MobileS: "@media(max-width:400px)",
};

export const Feed = styled.div`
  margin: 0px 0px 40px 17%;
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
      width: 100%;
    }
    
    h1{
      width: 100%;
      font-size: 20px;
      margin: 10px 5px;
    }
    
    p{
      color: #297FB8;
      font-size: 17px;
      margin: 10px 0px 20px 5px;
    }
  }

    ${media.Mobile} {
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

        .favorito{margin: 10px 0px;}
      }

      .buttonVejaMais{  margin: 0;  }
    }    
  }
`

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 3%;

  
  .buttonVejaMais:hover{
    color: #297FB8;
    border: 2px solid #297FB8;
    background-color: white;
  }
`

export const Profile = styled.div`
  display: flex;
  flex-direction: row;

  img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    cursor: pointer;
  }

  h1{
    line-height:70px;
    cursor: pointer;    
    font-weight: bold;
  }

  .favorito{
    width: 30px;
    height: 30px;
    margin: 20px 0px 0px 10px;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  margin: 15px 15px 0px 0px;
  border-radius: 20px;
  font-size: 17px;
  color: white;
  cursor: pointer;
  background-color: #297FB8;
`

export const Produto = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 30px;
`

export const CointanerProduto = styled.div`
  width: 90%;
  
  img{
    max-width: 400px;
  }

h1{
  width: 90%;
  font-size: 17px;
  margin: 10px 5px;
}

p{
  color: #297FB8;
  font-size: 17px;
  margin-left: 5px;
}
`;