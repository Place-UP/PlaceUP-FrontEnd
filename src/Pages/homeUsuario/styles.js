import styled from "styled-components";

export const Home = styled.div`  background-color: #ECF0F1;  `;

export const HeaderA = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img{
        width: 30px;
        height: 30px;        
        padding: 40px 0px 0px 10px;
        cursor: pointer;
    }

    .seta{
        width: 30px;
        height: 30px;
        padding: 10px 0px 0px 10px;
        cursor: pointer;
    }
`;

export const Barra = styled.div`
  width: 70%;
  padding: 27px 0 37px 24%;
  
  .pesquisa{
    width: 70%;
    height: 40px;
    padding: 0px 20px 0px 30px;
    border-radius: 10px;
    background-color: white;
    background-image:url(images/busca.png);
    background-size: 15px;
    background-position: 10px 9px;
    background-repeat:no-repeat;     
    border:0;
    outline: 0;
  }
`;

export const Categoria = styled.div`
  padding: 0px 0 30px 17%;
  padding-bottom: 30px;

  h1{   
    font-size: 20px; 
    margin-left: 5px;
    font-weight: 800;
}

  .containerCategoria{
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CategoriaShopping = styled.div`
    width: 120px;
    height: 90px;
    border-radius: 20px;
    margin-top: 70px;
    text-align: center; 
    background-color: white;

    img{
        width: 100px;
        height: 100px;
        font-size: 17px;
        margin-top: -50px;
    }
`

export const InfoCategoria = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;    
    border-left: 2px solid #E85959;

    h2{   
        font-size: 15px; 
        margin-left: 5px;
        font-weight: 600;
        cursor: pointer;
    }

    p{
        width: 20px;
        height: 20px;
        background-color: #E85959;
        color: white;
        font-size: 17px;
        border-radius: 10px;
        line-height: -200px;
        cursor: pointer;
    }
`;