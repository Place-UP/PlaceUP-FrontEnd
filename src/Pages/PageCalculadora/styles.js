import styled from "styled-components";

const Media = {
  Desktop: "@media(max-width:1189px)",
  Tablet: "@media(max-width:768px)",
  MobileL: "@media(max-width:550px)",
  MobileM: "@media(max-width:375px)",
};
export const Main = styled.main`
  width: 100%;
`;

export const Container = styled.div`
  margin: auto;

  .PorcentIcon {
    width: 100px;
    height: 100px;
  }
  .icon1 {
    margin-top: 100px;
  }
  .icon2 {
    display: block;
    margin: auto;
    margin-top: 100px;
  }
  .ContainerBanner {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: baaseline;
    justify-content: space-between;

    .TextArea {
      width: 35%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h1 {
        font-family: "Bakbak One";
        font-size: 60px;
        color: #333333;
        margin-bottom: 23px;
      }

      p {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        color: #807b7b;
        margin-bottom: 23px;
      }
      button {
        background: linear-gradient(
          297.29deg,
          rgba(23, 118, 180, 0.83) 2.88%,
          rgba(23, 118, 180, 0.94) 12.26%,
          #1776b4 25.8%,
          #1476b5 80.47%,
          #126fab 91.18%,
          #0b6caa 100.11%
        );
        border-radius: 20px;
        padding: 20px 24px;
        font-family: "Lato";
        font-size: 30px;
        text-align: center;
        color: #f4f4f4;
        cursor: pointer;
      }
    }
    .ImageArea {
      width: 45%;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }

  .HowToUseCalculatorP1 {
    width: 80%;
    margin: auto;
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    .Tittle {
      width: 40%;
      h1 {
        font-family: "Lato";
        font-style: normal;
        font-size: 64px;
        color: #2d3e50;
      }
      hr {
        width: 130.65px;
        height: 7px;
        background: linear-gradient(
          297.29deg,
          rgba(23, 118, 180, 0.83) 2.88%,
          rgba(23, 118, 180, 0.94) 12.26%,
          #1776b4 25.8%,
          #1476b5 80.47%,
          #126fab 91.18%,
          #0b6caa 100.11%
        );
        float: left;
        margin-top: 20px;
      }
    }

    .paragraph {
      float: none;
      width: 40%;
      p {
        width: 90%;
        margin-right: 100px;
        font-family: "Lato";
        font-size: 30px;
        color: #333333;
      }
    }
  }

  //Part do cards background da area
  .BackgroundCardsParts {
    /* width: 90%; */
    margin-top: 100px;
    margin-bottom: 100px;
    background: linear-gradient(
      91.51deg,
      rgba(232, 237, 238, 0) -9.56%,
      rgba(227, 232, 233, 0) -3.22%,
      rgba(217, 222, 223, 0) 10.47%,
      rgba(196, 202, 203, 0) 37.49%,
      rgba(172, 178, 180, 0.1) 100%
    );
    width: 100%;

    .CardsPart {
      width: 80%;
      margin: auto;
    }
    .AreaTittle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;

      span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        hr {
          margin-left: 50px;
          width: 100px;
          height: 7px;
          background: linear-gradient(
            297.29deg,
            rgba(23, 118, 180, 0.83) 2.88%,
            rgba(23, 118, 180, 0.94) 12.26%,
            #1776b4 25.8%,
            #1476b5 80.47%,
            #126fab 91.18%,
            #0b6caa 100.11%
          );
        }
      }
      h1 {
        font-family: "Lato";
        font-size: 60px;
        color: #333333;
      }
      p {
        font-family: "Lato";
        font-weight: 800;
        font-size: 36px;
        color: #333333;
      }
    }
  }
  .StartBackground {
    width: 100%;
    background: linear-gradient(
      304.69deg,
      rgba(116, 189, 235, 0.2) 0.55%,
      rgba(240, 240, 255, 0.51) 69.7%,
      #ffffff 98.57%
    );

    .FinalPart {
      width: 80%;
      margin: auto;
      .TittleFinalPart {
        margin: auto;
        padding-top: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h1 {
          font-family: "Lato";
          font-weight: 900;
          font-size: 80px;
          color: #333333;
        }
        p {
          font-family: "Lato";
          font-weight: 600;
          font-size: 30px;
          color: #333333;
        }
      }
      .BtnPart {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .ImageFinalContent {
          padding-top: 50px;
          width: 40%;
          img {
            width: 100%;
          }
        }

        button {
          background: linear-gradient(
            297.29deg,
            rgba(23, 118, 180, 0.83) 2.88%,
            rgba(23, 118, 180, 0.94) 12.26%,
            #1776b4 25.8%,
            #1476b5 80.47%,
            #126fab 91.18%,
            #0b6caa 100.11%
          );
          border-radius: 20px;
          padding: 20px 24px;
          font-family: "Lato";
          font-size: 30px;
          text-align: center;
          color: #f4f4f4;
        }
      }
    }
  }
`;

//Container Do card em sí;.
export const ContCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
//Parte de dentro do card e sua parte branca

export const Cards = styled.div`
  margin-top: 80px;

  .CardsTittle {
    display: flex;
    align-items: flex-start;
    h1,
    span {
      margin-left: 10px;
      font-family: "Lato";
      font-size: 30px;
      color: #333333;
      opacity: 0.8;
    }
    margin-bottom: 50px;
  }

  .AreaWhite {
    width: 25vw;
    height: 500px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: baseline;
    flex-direction: column;
    &:hover {
      transition: 0.2s;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    }
    .IntoCard {
      width: 80%;
      margin: auto;
      .IconCard {
        margin-bottom: 180px;
      }
      .Textarea {
        p {
          font-family: "Lato";
          font-style: normal;
          font-weight: 400;
          font-size: 30px;
          color: #333333;
        }
      }
    }
  }
`;
