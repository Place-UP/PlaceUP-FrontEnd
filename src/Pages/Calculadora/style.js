import styled from "styled-components";
const Media = {
  Laptop: "@media(max-width:1250px)",
  Desktop: "@media(max-width:1440px)",
  Tablet: "@media(max-width:994px)",
  MobileL: "@media(max-width:660px)",
  MobileM: "@media(max-width:375px)",
  Nav: "@media(max-width:550px)",
};
export const Conatiner = styled.div`
  width: 90%;
  margin-left: 70px;
  ${Media.Tablet} {
    margin-left: 30px;
  }

  ${Media.MobileM} {
    margin-left: 20px;
  }
`;
export const Main = styled.div`
  width: 100%;
  margin: auto;
  background-color: ${({ theme }) => theme.body};
  .ContainerCalculator {
    .AreaContentV {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    margin: auto;
    ${Media.Tablet} {
      justify-content: center;
      flex-direction: column;
      text-align: center;
      width: 100%;
    }
    .Button {
      cursor: pointer;
    }
  }
  .container {
    /* width: 90%; */
    margin: auto;
    margin-left: 70px;
    ${Media.Nav} {
      margin-left: 40px;
    }

    button {
      margin-top: 30px;
      width: 300px;
      ${Media.Tablet} {
        width: 280px;
      }
      ${Media.MobileL} {
        width: 250px;
      }
      ${Media.MobileM} {
        width: 200px;
      }
    }
  }
  .backButton {
    width: 4%;
    padding-top: 20px;
    float: left;
    cursor: pointer;
  }
  .header {
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .textArea {
      text-align: center;
      h1 {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 38px;
        color: ${({ theme }) => theme.title};
        margin-bottom: 10px;
        ${Media.Laptop} {
          font-size: 36px;
        }
        ${Media.Tablet} {
          font-size: 32px;
        }
        ${Media.MobileL} {
          font-size: 28px;
        }
      }
      p {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: ${({ theme }) => theme.fontColor};
        ${Media.Laptop} {
          font-size: 18px;
        }
        ${Media.Tablet} {
          font-size: 15px;
        }
        ${Media.MobileL} {
          font-size: 12px;
        }
      }

      img {
        width: 150px;
        ${Media.Laptop} {
          width: 130px;
        }
        ${Media.Tablet} {
          width: 100px;
        }
        ${Media.MobileL} {
          width: 80px;
        }
      }
    }
  }
  .TableSimilarPrices {
    .TableTitle {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h1 {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        color: ${({ theme }) => theme.fontColor};
        margin-bottom: 10px;
        margin-top: 30px;
        ${Media.Laptop} {
          font-size: 36px;
        }
        ${Media.Tablet} {
          font-size: 32px;
        }
        ${Media.MobileL} {
          font-size: 28px;
        }
      }
      p {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: ${({ theme }) => theme.fontColor};
        ${Media.Laptop} {
          font-size: 18px;
        }
        ${Media.Tablet} {
          font-size: 15px;
        }
        ${Media.MobileL} {
          font-size: 12px;
        }
      }
    }
    .TableTitleList {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 50px;

      p {
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: ${({ theme }) => theme.fontColor};

        ${Media.Laptop} {
          font-size: 18px;
        }
        ${Media.Tablet} {
          font-size: 15px;
        }
        ${Media.MobileL} {
          font-size: 12px;
        }
      }
      span {
        text-align: center;
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: ${({ theme }) => theme.fontColor};
        ${Media.Laptop} {
          font-size: 18px;
        }
        ${Media.Tablet} {
          font-size: 15px;
        }
        ${Media.MobileL} {
          font-size: 12px;
        }
      }
    }
    .TableContainer {
      margin: auto;
      margin-top: 30px;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: ${({ theme }) => theme.cards};
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
      /* margin-bottom: 30px; */
      padding-bottom: 30px;

      max-width: 500px;
      .TablePlaceUP {
        margin-top: 170px;
        display: flex;
        gap: 52px;
        flex-direction: column;
        text-align: center;
        span {
          text-align: center;
          font-family: "Lato";
          font-style: normal;
          /* font-weight: 400; */
          font-size: 20px;
          color: ${({ theme }) => theme.fontColor};
        }
        p {
          color: ${({ theme }) => theme.fontColor};
        }
      }
    }
  }
  .ResulteWhite {
    width: 563px;
    background-color: ${({ theme }) => theme.cards};
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
    border-radius: 62px;
    padding: 30px 0;
    ${Media.Laptop} {
      width: 400px;
    }
    ${Media.Tablet} {
      width: 100%;
    }

    /* Titulo do produto dentro da tabela */
    h1 {
      text-align: center;
      font-family: "Lato";
      font-style: normal;
      font-size: 34px;
      color: ${({ theme }) => theme.fontColor};
      ${Media.Laptop} {
        font-size: 31px;
      }
      ${Media.Tablet} {
        font-size: 28px;
      }
      ${Media.MobileL} {
        font-size: 26px;
      }
    }
    .Unitario {
      color: ${({ theme }) => theme.fontColor};
      font-size: 34px;
      font-weight: bold;
      ${Media.Laptop} {
        font-size: 31px;
      }
      ${Media.Tablet} {
        font-size: 28px;
      }
      ${Media.MobileL} {
        font-size: 26px;
      }
    }
    span {
      display: flex;
      justify-content: center;
      margin-top: 50px;
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      color: ${({ theme }) => theme.fontColor};
      text-align: center;
      p {
        color: ${({ theme }) => theme.fontColor};
      }
      ${Media.Laptop} {
        font-size: 22px;
        justify-content: left;
        margin-left: 30px;
        &:nth-child(2) {
          font-size: 100px;
        }
      }
      ${Media.Tablet} {
        font-size: 20px;
      }
      ${Media.MobileL} {
        font-size: 18px;
      }
    }
    .InformationsDescription {
      margin-top: 30px;
      margin-left: 30px;
      display: flex;
      align-items: flex-start;
      gap: 30px;
      flex-direction: column;
      justify-content: start;
      color: ${({ theme }) => theme.fontColor};
      ${Media.Nav} {
        margin-left: 0;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .buttonContainer {
    position: relative;
    margin-bottom: -47px;
    margin-left: 30px;

    ${Media.MobileL} {
      margin-left: 0;
    }
    margin-top: 60px;
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  margin: 40px 0;
  ${Media.Tablet} {
    align-items: center;
    justify-content: center;
  }

  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    color: ${({ theme }) => theme.fontColor};
    ${Media.Laptop} {
      font-size: 18px;
      text-align: center;
    }
    ${Media.Tablet} {
      font-size: 15px;
    }
    ${Media.MobileL} {
      font-size: 12px;
    }
  }
  h1 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 36px;
    color: ${({ theme }) => theme.title};
    ${Media.Laptop} {
      font-size: 31px;
      text-align: center;
    }
    ${Media.Tablet} {
      font-size: 28px;
    }
    ${Media.MobileL} {
      font-size: 26px;
    }
  }

  input {
    width: auto;
    text-align: center;
    color: ${({ theme }) => theme.fontColor};
    background-color: transparent;
  }
`;

export const ButtonStyle = styled.button`
  cursor: pointer;
  width: 200px;
  background: #2ba0d2;
  box-shadow: 9px 27px 20px rgb(0 0 0 / 10%);
  border-radius: 19px;
  height: 50px;
  .btn {
    width: 2000px;
    padding: 10px 20px;
  }
  ${Media.Laptop} {
    width: 180px;
  }
  ${Media.Tablet} {
    width: 160px;
    margin-bottom: 100px;
  }
  ${Media.MobileL} {
    width: 160px;
  }
  p {
    font-family: "Lato";
    font-style: normal;
    font-size: 20px;
    color: white;
    opacity: 0.6;
    transform: 1s;
    ${Media.Laptop} {
      font-size: 18px;
    }
    ${Media.Tablet} {
      font-size: 15px;
    }
    ${Media.MobileL} {
      font-size: 12px;
    }
    &:hover {
      transform: 1s;
      opacity: 1;
    }
  }
`;
