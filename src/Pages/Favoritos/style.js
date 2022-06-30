import styled from "styled-components";

const Media = {
  Desktop: "@media(max-width:1189px)",
  NotebookL: "@media(max-width:935px)",
  Notebook: "@media(max-width:928px",
  Tablet: "@media(max-width:768px)",
  MobileL: "@media(max-width:535px)",
  MobileM: "@media(max-width:375px)",
   MobileS: "@media(max-width:320px)",
};

export const Main = styled.div``;
export const Body = styled.body`
  width: 60%;
  height: 570px;
  margin-left: 13%;
  margin-right: 28%;
  ${Media.NotebookL} {
    width: 80%;
  }
  .Title {
    position: relative;
    height: 90px;
    left: 3%;
    top: 9%;

    p {      
      color: ${({ theme }) => theme.title};
      font-weight: 400px;
      font-size: 40px;
      font-family: "Bakbak One";
      ${Media.Tablet} {
        font-size: 30px;
      }
    }
  }
`;

export const Itens = styled.div`
  width: 100%;
  height: 84.2%;
  margin-top: 30px;
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  column-gap: 900px;
  gap: 40px 40px;
  margin-bottom: 50px;
`;

export const Merchant1 = styled.div`
  width: 250px;
  height: 285px;
  margin-bottom: 25px;
  box-shadow: rgba(41, 127, 184, 1) 0px 8px 0px 0px;
  border-radius: 40px;
  flex-direction: column;
  display: flex;
  align-items: center;
  align-content: space-between;
  background-color: ${({ theme }) => theme.cards};

  ${Media.Tablet} {
    width: 30%;
  }
  ${Media.MobileL} {
    width: 40%;
  }
  ${Media.MobileM} {
    width: 43%;
    margin-left: 3%;
  }
   ${Media.MobileS} {
    width: 50%;
    margin-left: 3%;
  }

  .Icon {
    height: 30%;
    width: auto;
    padding: 2px;
    margin-top: 20px;
    border: black solid 1px;
    border-radius: 50%;
  }

  p {
    margin-top: 15px;
    font-weight: bold;   
    font-family: lato;
    font-size: 20px; 
    margin-top: 20px;
    color: ${({ theme }) => theme.fontColor};
  }

  .Heart {
    height: 15%;
    width: auto;
    margin-top: 30px;
    cursor: pointer;
    transition: 0.2s;
  }

  .Heart:hover {
    transform: scale(1.4);
  }
`;
