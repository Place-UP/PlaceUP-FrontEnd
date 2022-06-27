import styled from "styled-components";
const Media = {
  Laptop: "@media(max-width:1250px)",
  Desktop: "@media(max-width:1440px)",
  Tablet: "@media(max-width:800px)",
  MobileL: "@media(max-width:660px)",
  MobileM: "@media(max-width:375px)",
  Nav: "@media(max-width:550px)",
};
export const Conatiner = styled.div`
  width: 90%;
  margin-left: 70px;
`;
export const Main = styled.div`
  width: 100%;
  margin: auto;

  background-color: #e1e5e5;
  .ContainerCalculator {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .Button {
      cursor: pointer;
    }
  }
  .container {
    /* width: 90%; */
    margin: auto;
    margin-left: 70px;
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
        color: #2980b9;
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
        color: #807b7b;
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
        color: #2980b9;
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
        color: #807b7b;
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
        color: #2980b9;
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
        color: #807b7b;
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
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background: #ffffff;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
      /* margin-bottom: 30px; */
      padding-bottom: 30px;
      .TablePlaceUP {
        margin-top: 50px;
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
          color: #807b7b;
        }
      }
      .TableGoogleShopping {
        margin-top: 50px;
        display: flex;
        gap: 52px;
        flex-direction: column;
        text-align: center;
        span {
          font-family: "Lato";
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          color: #807b7b;
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
    }
  }

  .ResulteWhite {
    width: 563px;
    background: #ffffff;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
    border-radius: 62px;
    padding: 30px 0;

    h1 {
      text-align: center;
      font-family: "Lato";
      font-style: normal;
      font-size: 34px;
      color: #493d3d;
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
      font-size: 38px;
      color: #2d3e50;
      text-align: center;
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
    .InformationsDescription {
      margin-top: 30px;
      margin-left: 30px;
      display: flex;
      align-items: flex-start;
      gap: 30px;
      flex-direction: column;
      justify-content: start;
    }
  }
  .buttonContainer {
    position: relative;
    margin-bottom: -47px;
    margin-left: 30px;
    margin-top: 60px;
  }
`;
export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 40px 0;
  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    color: #807b7b;
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
  h1 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 36px;
    color: #0009;
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

  input {
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
