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

export const HeaderA = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 50%;


    ${media.MobileS}{
      width: 30%;
    }
`;

export const Barra = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  padding: 0px 2%;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 20px;

  span{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
  }
    
  .pesquisa{
    width: 95%;
    height: 40px;
    padding: 0px 20px 0px 10px;
    background-color: white;
    background-size: 15px;
    background-position: 10px 9px;
    background-repeat:no-repeat;     
    border:0;
    outline: 0;
  }

  .seta{
    background-color: #fff;
    cursor: pointer; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
  }

`;

export const Car = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
   img{
        width: 30px;
        height: 30px;        
        
        cursor: pointer;
    }
`

export const Categoria = styled.div`
  width: 60%;
  padding: 0px 0 30px 17%;

  h1{   
    font-size: 25px; 
    margin-left: 5px;
    font-weight: 800;      
    font-family: 'Bakbak One', cursive;
  }

  .containerCategoria{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 3rem;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    ${media.Tablet}{
      width: 100%;
      grid-template-columns: auto auto auto auto;
      grid: auto / auto auto;
    }

    ${media.MobileS}{
      width: 50%;
      margin-left: 20%;
      grid-template-columns: auto auto auto 20px;
      grid: auto / auto;
    }
  }

  ${media.MobileS}{
    h1{   margin-left: 24px;    }
  }
`;

export const CategoriaShopping = styled.div`
    height: 80px;
    border-radius: 8px;
    margin-top: 70px;
    text-align: center; 
    background-color: white;

    img{
        width: 90px;
        height: 90px;
        font-size: 17px;
        margin-top: -50px;
    }
`;

export const InfoCategoria = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;    

    h2{   
      text-align: center;
      font-size: 14px; 
      margin-left: 5px;
      font-weight: 600;
      cursor: pointer;

      &::before{
        content: '';
        border-left: 5px solid #E85959;
        padding-right: 8px;
      }
    }

    p{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 25px;
      background-color: #E85959;
      color: white;
      font-size: 17px;
      border-radius: 4px;
      cursor: pointer;
      font-family: 'Lato';
    }
`;