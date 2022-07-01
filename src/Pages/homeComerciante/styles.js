import styled from "styled-components";
import grafico from "./image/grafico.png";

const media = {
  Tablet: "@media(max-width: 940px)",
  MobileM: "@media(max-width: 440px)",
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

    ${media.MobileM} { font-size: 26px; }  
  
    ${media.MobileS} { font-size: 24px; }  
  }
`;

export const ContainerCalendar = styled.div`
  width: 57%;
  padding: 30px 0 30px 13%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  .calendar{ 
    background-color: ${({ theme }) => theme.cards};
    color: ${({ theme }) => theme.fontColor};
    border-radius: 20px;
  }

  .grafic{
    width: 50%;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.fontColor};
    background-image:url(${grafico});
    background-repeat: no-repeat;
    background-size: 85%;
    background-position: 50% 80%;
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
  

  .visita{
    width: 32%;
    height: 120px;
    border-radius: 20px;
    background-color: #923FE6;
    text-align: center;
    color: white;
  }

  .reservas{
    width: 32%;
    height: 120px;
    border-radius: 20px;
    background-color: #2980B9;
    text-align: center;
    color: white;
  }

  .pendentes{
    width: 32%;
    height: 120px;
    border-radius: 20px;
    background-color: #E6533F;
    text-align: center;
    color: white;
  }
  
  h1{
    font-size: 23px;
    text-align: center;
    margin: 10px auto;
  }

  p{
    font-size: 43px;
    text-align: center;
    margin: 20px auto;
  }
`;