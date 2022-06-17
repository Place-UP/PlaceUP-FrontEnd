import styled from "styled-components";

export const Main = styled.div`
  background: linear-gradient(
    304.69deg,
    rgba(116, 189, 235, 0.2) 0.55%,
    rgba(240, 240, 255, 0.51) 69.7%,
    #edf4f8 98.57%
  );
  width: 100%;
  margin: auto;
  height: max-content;

  .ContainerCalculator {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .Button {
      cursor: pointer;
    }
  }
  .container {
    width: 90%;
    margin: auto;
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
        font-size: 40px;
        color: #2980b9;
        margin-bottom: 10px;
      }
      p {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #807b7b;
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
      }
      p {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #807b7b;
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
      }
      span {
        text-align: center;
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #807b7b;
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
      font-size: 30px;
      color: #493d3d;
    }
    span {
      display: flex;
      justify-content: center;
      margin-top: 50px;
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      color: #2d3e50;
      text-align: center;
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
  }
  h1 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    color: #0009;
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
    &:hover {
      transform: 1s;
      opacity: 1;
    }
  }
`;
