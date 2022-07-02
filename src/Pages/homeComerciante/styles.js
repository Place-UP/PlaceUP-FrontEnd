import styled from "styled-components";
import grafico from "./image/grafico.png";

const media = {
  Notebook: "@media(max-width: 1400px)",
  Tablet: "@media(max-width: 940px)",
  MobileM: "@media(max-width: 540px)",
  MobileS: "@media(max-width:320px)",
};

export const Main = styled.div`
  background-color: ${({ theme }) => theme.body};

  ${media.Tablet} {   margin-left: 6%;   }  

  ${media.MobileM} {   margin-left: 6%;   }  

  ${media.MobileS} {   margin-left: 5%;  } 
`;

export const Top = styled.div`
  width: 70%;
  padding: 30px 0 30px 12%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
  ${media.MobileM} { padding: 108px 0px 0px 14%; }  

  h1 {
    font-size: 34px;
    margin: 5px 15px;
    font-weight: 800;
    font-family: "Bakbak One", cursive;
    color: ${({ theme }) => theme.title};

    ${media.Tablet} { font-size: 31px; }  

    ${media.MobileM} { font-size: 28px; }  
  
    ${media.MobileS} { font-size: 26px; }  
  }

  .notification {
    min-width: 40px;
    min-height: 40px;
    cursor: pointer;
    color: ${({ theme }) => theme.fontColor};
    margin-right: 20%;
  }
`;

export const On = styled.div`
  width: 57%;
  padding: 30px 0 30px 12%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;  

  h1 {
    font-size: 31px;
    margin: 5px 15px;
    font-weight: 800;
    font-family: "Lato", cursive;
    color: ${({ theme }) => theme.fontColor};

    ${media.Tablet} { font-size: 28px; }  

    ${media.MobileM} { 
      font-size: 26px;
      margin-left: 25px;
    }  
  
    ${media.MobileS} { font-size: 24px; }  
  }
`;

export const ContainerCalendar = styled.div`
  width: 57%;
  padding: 30px 0 30px 13%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${media.Notebook} { display: block; }  

  ${media.Tablet} { width: 80%; } 

  ${media.MobileM} { margin-left: 4%; }  
  
  .calendar{ 
    background-color: ${({ theme }) => theme.cards};
    color: ${({ theme }) => theme.fontColor};
    border-radius: 20px;    

    ${media.Notebook} { 
      min-width: 80%;
      margin: 20px auto; 
    }  

    ${media.MobileM} { font-size: 15px; }  

    ${media.MobileS} { 
      width: 100%;
      font-size: 13px; 
    }  
  }

  .grafic{
    width: 50%;
    height: 250px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: white;
    background-image:url(${grafico});
    background-repeat: no-repeat;
    background-size: 85%;
    background-position: 50% 80%;

    ${media.Notebook} { 
      min-width: 80%;
      margin: 20px auto; 
    }  

    ${media.MobileM} { background-size: 95% 70%;  }  

    ${media.MobileS} { background-size: 90% 50%;  }  
  }

  .prece{
    display: flex;
  }

  h3{
    margin-top: 6px;
    padding-right: 5px;
  }

  h2{
    font-size: 23px;
    color: #2980B9;  
  }
`;

export const Contagem = styled.div`
  width: 57%;
  padding: 30px 0 30px 13%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  ${media.Tablet} { width: 80%; } 

  
  ${media.MobileM} { display: block;  } 

  ${media.MobileS} { margin-left: 10px; } 

  .visita{
    width: 32%;
    height: auto;
    padding-bottom: 10px;
    border-radius: 20px;
    background-color: #923FE6;
    text-align: center;
    color: white;

    ${media.MobileM} { width: 70%; margin: 10px auto;}  
  }

  .reservas{
    width: 32%;
    height: auto;
    padding-bottom: 10px;
    border-radius: 20px;
    background-color: #2980B9;
    text-align: center;
    color: white;

    ${media.MobileM} { width: 70%; margin: 10px auto;} 
  }

  .pendentes{
    width: 32%;
    height: auto;
    padding-bottom: 10px;
    border-radius: 20px;
    background-color: #E6533F;
    text-align: center;
    color: white;

    ${media.MobileM} { width: 70%; margin: 10px auto;} 
  }
  
  h1{
    font-size: 23px;
    text-align: center;    
    font-family: Lato;    
    padding: 20px 2% 0px 2%;
  }

  p{
    font-size: 43px;
    text-align: center; 
    font-family: Lato;
    margin: 15px auto;  
  }
`;

export const Seller = styled.div`
  width: 57%;
  padding: 30px 0 30px 12%;

  ${media.Tablet} { width: 76%; }  

  .title{
    font-size: 23px;
    padding: 10px 20px;
    font-family: Lato;
    color: #2980B9;
    font-weight: bold;

    ${media.MobileM} { padding: 0; } 
  }

  .tableSeller {
    width: 100%;
    height: auto;
    border-radius: 20px;
    padding: 20px 20px 30px 20px;
    background-color: white;

    ${media.MobileM} { 
      width: 90%; 
      margin-left: 20px;
    } 

    ${media.MobileS} { 
      width: 70%; 
      margin-left: 30px;
    } 
  }

  .containerProducts{
    margin-left: 6%;

    ${media.MobileM} { margin: 0; } 
  }

  h1{
    width: 40%;
    font-size: 20px;
    font-family: Lato;
    ${media.MobileM} { 
      width: 100%; 
      text-align: center;
    } 
  }

  p{
    width: 30%;
    margin-left: 20px;
    font-size: 20px;
    font-family: Lato;

    ${media.MobileM} { 
      margin: 20px auto;       
      text-align: center;
    } 
  }

  .container {
    width: 100%;
    position: relative;
    border-radius: 4px;
    box-sizing: border-box;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    ${media.MobileM} { display: block; } 
  }
  
  .Loading {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 10px;
    background: #f1f1f1;
    border-radius: 4px;
    overflow: hidden;    

    ${media.Tablet} { display: none; }  
  }

  .product1{
    width: 100%;
    margin-top: 40px;    

    .Loading:after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      background: #2980B9;
      height: 100%;
      border-radius: 4px;
    }
  }

  .product2{
    width: 100%;
    margin-top: 40px;  

    .Loading:after {
      content: '';
      position: absolute;
      left: 0;
      width: 90%;
      background: #2980B9;
      height: 100%;
      border-radius: 4px;
    }
  }

  .product3{
    width: 100%;
    margin-top: 40px;  

    .Loading:after {
      content: '';
      position: absolute;
      left: 0;
      width: 84%;
      background: #2980B9;
      height: 100%;
      border-radius: 4px;
    }
  }

  .product4{
    width: 100%;
    margin-top: 40px;  

    .Loading:after {
      content: '';
      position: absolute;
      left: 0;
      width: 73%;
      background: #2980B9;
      height: 100%;
      border-radius: 4px;
    }
  }

  .product5{
    width: 100%;
    margin-top: 40px;  

    .Loading:after {
      content: '';
      position: absolute;
      left: 0;
      margin-right: 200px;
      width: 67%;
      background: #2980B9;
      height: 100%;
      border-radius: 4px;
    }
  }
`;