import styled from "styled-components";

const media = {
  Tablet: "@media(max-width: 935px)",
  Mobile: "@media(max-width: 435px)"
};

export const Section = styled.section`
  .cart{
    position: fixed;
    right: 0pt;
    max-width: 400px;
    width: 25%;
    background-color: #ECF0F1;
    margin: auto;
    transition: width 0.5s;
    padding-top: 30px; 
  }

  .Close{
    color: #2980B9;
    width: 40px;
    height: 40px;
    margin-left: 25px;
  }

  ${media.Tablet} {
    display: none;

    .cart{ 
      width: 50%;
    }

    .buttonSeeMore{ width: 80%;}
  }   
  
  ${media.Mobile} {
    .cart{ 
      width: 100%;
    }
  }
`

export const Information = styled.div`
    display: flex;
    padding-bottom: 30px;
    border-bottom: 1px solid #A6A8A9;

    .business{ margin-left: 25px; }

    h1{
      margin-top: 5px;
      font-size: 20px;
      font-weight: bold;
    }

    h3{
      font-size: 17px;
      color: #A6A8A9;
    }
`;

export const Cart = styled.div`
    position: relative;
    top: 5%;
    text-align: center;

    .cartContainer{   text-align: center;   }

    .Titule{
      font-size: 25px;
      font-weight: bold;
      color: #2980B9;
      margin-bottom: 30px;
    }

    .ReservationSystem{
      margin: 0 auto;
    }
`;

export const Day = styled.div`
    background-color: white;
    width: 45%;
    height: 80px;
    margin: 0 auto;
    border-radius: 10px;
    border: 2px solid #2980B9;

    h1{      
      font-size: 18px;
      font-weight: bold;
      margin-top: 15px;
    }

    p{
      font-size: 15px;
      margin-top: 10px;
    }
`;

export const Scheduling = styled.div`
    background-color: white;
    width: 45%;
    height: auto;
    padding-bottom: 10px;
    margin: 15px auto;
    border-radius: 10px;
    border: 2px solid #2980B9;

    h1{      
      font-size: 18px;
      font-weight: bold;
      margin-top: 5px;
    }

    p{
      font-size: 15px;
      margin-top: 5px;
    }
`;

export const Product = styled.div`
    margin-top: 50px;

    p{
      color: #2980B9;
      display: flex;
      padding: 15px 5%; 
      cursor: pointer;
    }
    .product{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 5%;  
    }
`;

export const ProductContainer = styled.div`
    width: 90%;
    margin: 20px auto;
    border-bottom: 2px solid #2980B9;
`;

export const finalize = styled.div`
    margin-top: 80px;

    .total{
      width: 90%;
      margin: 10px auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .buttonSeeMore:hover{
      color: #297FB8;
      border: 2px solid #297FB8;
      background-color: white;
    }

    .buttonSeeMore{
      width: 60%;
      height: 40px;
      margin: 15px auto 0px 20%;
      border-radius: 20px;
      font-size: 17px;
      color: white;
      cursor: pointer;
      background-color: #297FB8;
    }
`;