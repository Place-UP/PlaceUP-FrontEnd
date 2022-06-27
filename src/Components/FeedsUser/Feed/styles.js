import styled from "styled-components";

const media = {
  Tablet: "@media(max-width:900px)",
  Mobile: "@media(max-width:675px)",
  MobileS: "@media(max-width:320px)"
};

export const Feed = styled.div`
  margin: 0px 0px 40px 12%;
  max-width: 1400px;
  width: 60%;
  border-radius: 20px;
  background-color: white;

  ${media.Tablet} {    
    .product {
      max-width: 300px;
      display: block;
      margin: 10px auto;

    .cointanerProduct{   width: 100%;   }
  
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
          font-family: 'Lato', cursive;
        }

        .favorite{margin: 10px 0px;}
      }

      .cointanerProduct{
        width: 90%;
        h1{
          width: 90%;
          font-size: 15px;
          margin: 10px 5px;
        }
        
        p{
          color: #297FB8;
          font-size: 15px;
          margin: 10px 0px 20px 5px;
        }
      }
      .buttonSeeMore{  margin: 0;  }
    }    
        
    ${media.MobileS} {  
      margin-left: auto; 
      margin-right: 6%;
    }
  }
`

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2%;
  
  .buttonSeeMore:hover{
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
    font-family: 'Lato', cursive;
    padding: 0px 5px;
  }

  .favorite{
    width: 30px;
    height: 30px;
    margin: 20px 0px 0px 10px;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  margin: 15px 25px 0px 0px;
  border-radius: 20px;
  font-size: 17px;
  color: white;
  cursor: pointer;
  background-color: #297FB8;
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

  h1{
    width: 90%;
    text-align: left;
    font-size: 17px;
    padding: 10px 10px 0px 15px;    
    font-family: 'Lato', cursive;
  }

  p{
    font-family: 'Lato', cursive;
    text-align: left;
    color: #297FB8;
    font-size: 17px;
    padding: 5px 10px 0px 15px;    
  }
`;