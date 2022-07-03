import styled from "styled-components";
import background from "../../Img/Calculadora/BackgroundResponsivo.svg";
const Media = {
  Laptop: "@media(max-width:1024px)",
  Desktop: "@media(max-width:1440px)",
  Tablet: "@media(max-width:800px)",
  MobileL: "@media(max-width:660px)",
  MobileM: "@media(max-width:375px)",
  Nav: "@media(max-width:550px)",
};
export const Main = styled.main`
  width: 100%;
`;

export const Container = styled.div`
  margin: auto;
  ${Media.Tablet} {
    margin-left: 70px;
  }
  ${Media.Nav} {
    margin-left: 50px;
  }

  .PorcentIcon {
    width: 100px;
    height: 100px;
    ${Media.Laptop} {
      width: 80px;
      height: 80px;
    }
    ${Media.Tablet} {
      width: 70px;
      height: 70px;
    }
    ${Media.MobileL} {
      width: 50px;
      height: 50px;
    }
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
    ${Media.Tablet} {
      height: 50vh;
      margin: auto;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url(${background});
    }
  }

  .TextArea {
    width: 25%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${({ theme }) => theme.fontColor};

    ${Media.Tablet} {
      text-align: center;
      width: max-content;
    }
    h1 {
      font-family: "Bakbak One";
      font-size: 38px;
      color: ${({ theme }) => theme.title};
      margin-bottom: 23px;
      ${Media.Laptop} {
        font-size: 36px;
      }
      ${Media.Tablet} {
        font-size: 32px;
        color: white;
      }
      ${Media.MobileL} {
        font-size: 28px;
      }
      ${Media.MobileM} {
        font-size: 21px;
      }
    }

    p {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      color: ${({ theme }) => theme.fontColor};
      margin-bottom: 23px;
      ${Media.Laptop} {
        font-size: 18px;
      }
      ${Media.Tablet} {
        font-size: 15px;
        color: white;
      }
      ${Media.MobileL} {
        font-size: 12px;
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
      font-size: 20px;
      text-align: center;
      color: #f4f4f4;
      cursor: pointer;
      ${Media.Laptop} {
        padding: 18px 22px;
        font-size: 18px;
      }
      ${Media.Tablet} {
        padding: 16px 20px;
        font-size: 15px;
        background: #2d3e50;
      }
      ${Media.MobileL} {
        padding: 14px 18px;
        font-size: 12px;
      }
    }
  }
  .ImageArea {
    ${Media.Tablet} {
      display: none;
    }
    width: 45%;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .HowToUseCalculatorP1 {
    width: 70%;
    margin: auto;
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    .t1 {
      flex-direction: row-reverse;
    }
    ${Media.Tablet} {
      justify-content: space-evenly;
    }
    ${Media.MobileL} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 20px;
    }

    .Tittle {
      width: 40%;
      ${Media.Tablet} {
        width: fit-content;
      }
      h1 {
        font-family: "Lato";
        font-style: normal;
        font-size: 34px;
        color: ${({ theme }) => theme.title};
        ${Media.Laptop} {
          font-size: 31px;
        }
        ${Media.Tablet} {
          font-size: 28px;
        }
        ${Media.MobileL} {
          font-size: 26px;
          text-align: center;
        }
        ${Media.MobileM} {
          font-size: 20px;
        }
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
        border: none;
        float: left;
        margin-top: 20px;
        ${Media.Tablet} {
          float: none;
        }
      }
    }
    .paragraph {
      float: none;
      width: 40%;

      ${Media.Tablet} {
        width: 40%;
      }
      ${Media.MobileL} {
        width: 100%;
      }
      p {
        width: 90%;
        margin-right: 100px;
        font-family: "Lato";
        font-size: 20px;
        color: ${({ theme }) => theme.fontColor};
        ${Media.Laptop} {
          font-size: 18px;
        }
        ${Media.Tablet} {
          font-size: 15px;
          width: 100%;
        }
        ${Media.MobileL} {
          font-size: 12px;
          text-align: center;
        }
      }
    }
  }
  .t2 {
    flex-direction: row-reverse;
    margin-bottom: 200px;
        ${Media.Tablet} {
      justify-content: space-evenly;
    }
    ${Media.MobileL} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 20px;
    }
  }

  //Part do cards background da area
  .BackgroundCardsParts {
    /* width: 90%; */

    background: linear-gradient(
      91.51deg,
      rgba(232, 237, 238, 0) -9.56%,
      rgba(227, 232, 233, 0) -3.22%,
      rgba(217, 222, 223, 0) 10.47%,
      rgba(196, 202, 203, 0) 37.49%,
      rgba(172, 178, 180, 0.1) 100%
    );
    width: 100%;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;

    .CardsPart {
      width: 70%;
      margin: auto;
    }
    .AreaTittle {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
      ${Media.Tablet} {
        flex-direction: column;
        hr{
          display:none;
  
        }
      }
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
          border: none;
        }
      }
      h1 {
        font-family: "Lato";
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
        ${Media.MobileM} {
          font-size: 24px;
        }
      }
      p {
        font-family: "Lato";
        font-weight: 800;
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
  }
  .StartBackground {
    width: 100%;
    background-color: ${({ theme }) => theme.cards};

    .FinalPart {
      width: 70%;
      margin: auto;
      ${Media.Tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .TittleFinalPart {
        margin: auto;
        padding-top: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        ${Media.Tablet} {
          padding-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        h1 {
          font-family: "Lato";
          font-weight: 900;
          font-size: 38px;
          color: ${({ theme }) => theme.fontColor};
          ${Media.Laptop} {
            font-size: 36px;
          }
          ${Media.Tablet} {
            font-size: 32px;
          }
          ${Media.MobileL} {
            font-size: 28px;
          }
          ${Media.MobileM} {
            font-size: 21px;
          }
        }
        p {
          font-family: "Lato";
          font-weight: 600;
          font-size: 18px;
          color: ${({ theme }) => theme.fontColor};
          ${Media.Laptop} {
            font-size: 18px;
          }
          ${Media.Tablet} {
            font-size: 15px;
            margin-top: 10px;
            text-align: center;
          }
          ${Media.MobileL} {
            font-size: 12px;
          }
        }
      }
      .BtnPart {
        display: flex;
        align-items: center;
        justify-content: space-between;
        ${Media.Tablet} {
          margin-top: 30px;
          margin-bottom: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .ImageFinalContent {
          padding-top: 50px;
          width: 40%;
          ${Media.Tablet} {
            display: none;
          }
          img {
            width: 100%;
          }
        }

        button {
          cursor: pointer;
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
          font-size: 24px;
          text-align: center;
          color: white;
          ${Media.Laptop} {
            padding: 18px 22px;
            font-size: 18px;
          }
          ${Media.Tablet} {
            padding: 16px 20px;
            font-size: 15px;
          }
          ${Media.MobileL} {
            padding: 14px 18px;
            font-size: 12px;
          }
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
  overflow: auto;
  gap: 100px;
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
      font-size: 24px;
      color: ${({ theme }) => theme.fontColor};
      opacity: 0.8;
      ${Media.Laptop} {
        font-size: 21px;
      }
      ${Media.Tablet} {
        font-size: 18px;
      }
      ${Media.MobileL} {
        font-size: 16px;
      }
    }
    margin-bottom: 50px;
  }

  .AreaWhite {
    width: 300px;
    height: 500px;
    background-color: ${({ theme }) => theme.cards};
    display: flex;

    justify-content: center;
    align-items: baseline;
    flex-direction: column;
    transition: 0.5s;

    &:hover {
      transition: 0.5s;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    }
    .IntoCard {
      width: 80%;
      margin: auto;
      .IconCard {
        margin-bottom: 180px;
        .igmCard {
          width: 50px;
          height: 50px;
        }
      }
      .Textarea {
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
    }
  }
`;
