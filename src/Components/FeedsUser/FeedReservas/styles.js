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
      color: ${({ theme }) => theme.fontColor};
    }
    
    p{
      color: #297FB8;
      font-size: 17px;
      font-family: 'Lato', cursive;
      margin: 10px 0px 20px 5px;
      color: ${({ theme }) => theme.fontColor};
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
          font-size: 17px;
        }

        span{
          margin: 20px 0px;
        }

        p{
          margin: 30px 0px;
        }
      }

      .cointanerProduct{    
        width: 90%; 
        img{ margin: 10px 0px;}    
      }

      .buttonSeeMore{  margin: 0;  }
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
    margin: 28px 0px 0px 20px;
    border-radius: 50%;
    cursor: pointer;
  }

  h1{
    cursor: pointer;    
    font-family: 'Lato', cursive;
    color: ${({ theme }) => theme.fontColor};
    font-weight: bold;
    padding: 40px 5px 10px 5px;
  }

  p{
    line-height:-70px;
    cursor: pointer;    
    font-weight: 500;
    padding: 0px 5px 0px 5px;
    font-family: 'Lato', cursive;
    color: ${({ theme }) => theme.fontColor};

    span{
      color: #297FB8; 
      font-weight: bold;
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

export const Product = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 2% 30px 2%;
`

export const CointanerProduct = styled.div`
  width: 90%;
  
  img{
    width: 90%;
    max-width: 400px;
    border-radius: 20px;
    padding: 10px 2%;
  }
`;