import styled from "styled-components";

const Media = {
  Desktop: "@media(max-width:1300px)",
  Laptop: "@media(max-width:1024px)",
  Tablet: "@media(max-width:768px)",
  MobileL: "@media(max-width:635px)",
  MobileM: "@media(max-width:375px)",
};
export const Main = styled.main`
  width: 100%;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Media.Tablet} {
      background: #2980b9;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .logomob {
      display: none;
      ${Media.Tablet} {
        display: block;
        width: 88px;
        height: 88px;
        margin: auto;
      }
    }
    .logoBackground {
      ${Media.Tablet} {
        display: none;
      }
    }
    div {
      margin-right: 100px;
      span {
        background-color: #2980b9;
        border-radius: 15px;
        padding: 10px 30px;
        color: white;
        font-family: Lato;
        ${Media.Tablet} {
          display: none;
        }
      }
      ${Media.Tablet} {
        margin-right: 0;
      }
    }
  }
`;

export const FirstView = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  ${Media.MobileL} {
    justify-content: center;
    flex-direction: column;
  }
  div h1 {
    color: #344758;
    font-size: 54px;
    font-family: "Bakbak One";
    margin-bottom: 90px;
    margin-left: 150px;

    ${Media.Desktop} {
      font-size: 50px;
    }

    ${Media.Laptop} {
      font-size: 45px;
    }
    ${Media.Tablet} {
      font-size: 39px;
    }
    ${Media.MobileL} {
      margin: 0 auto;
      text-align: center;
      max-width: 90vw;
    }
    ${Media.MobileM} {
      font-size: 40px;
    }
    img {
      width: 10%;
    }
    span {
      color: #3698d9;
      font-family: "Bakbak One";
      line-height: 90px;
    }
  }

  .imgvectorBanner {
    max-width: 60%;
    ${Media.MobileL} {
      position: relative;
      bottom: 200px;
      opacity: 0.5;
      width: 100vw;
    }
  }

  .imgvectorBannerRight {
    margin-top: -50px;
    max-width: 60%;
    ${Media.Laptop} {
      max-width: 50%;
      margin-top: -150px;
    }
    ${Media.MobileL} {
      display: none;
    }
  }
`;
export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${Media.Tablet} {
    width: 60vw;
    justify-content: start;
    overflow-y: hidden;
    padding-bottom: 20px;
    margin: auto;
    &::-webkit-scrollbar {
      height: 1px;
    }
  }

  ${Media.MobileL} {
    width: 100vw;
  }
`;

export const Card = styled.div`
  width: 30vw;
  height: 454px;
  background: #f8f6f6;
  border-radius: 57px;
  box-shadow: ${(props) => props.primary};
  margin: auto;
  margin-top: 150px;
  ${Media.Tablet} {
    width: 50vw;
    margin-left: 20px;
  }

  ${Media.MobileL} {
    width: 80vw;
    margin: 30px;
  }
`;

export const Cards = styled.main`
  display: flex;
  &:nth-child(2) {
    margin-bottom: 10%;
    ${Media.Laptop} {
      margin: 0;
    }
  }

  .topimagecard {
    position: relative;
    display: block;
    width: 170px;
    height: 140px;
    margin: 0 auto;
    margin-top: -30px;
  }

  .bottomShadow {
    width: 170px;
    display: block;
    margin: 0 auto;
    margin-top: 60px;
  }
  .ContainerTextCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
  h1 {
    text-align: center;
    margin-top: 40px;
    font-family: "Lato";
    font-size: 30px;
    font-weight: bold;
  }
  p {
    max-width: 85%;
    margin: auto;
    margin-top: 50px;
    font-family: "Lato";
    font-size: 16px;
    text-align: center;
  }
`;

export const Hystory = styled.div`
  display: flex;
  background: #2d3e50;
  flex-direction: column;
  margin-top: 250px;
  ${Media.MobileL} {
    margin-top: 100px;
  }

  .title {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h1 {
    margin: auto;
    margin-top: 90px;
    font-family: "Bakbak One";
    font-weight: 400;
    font-size: 54px;
    line-height: 90px;
    color: #ecf0f1;

    ${Media.Desktop} {
      font-size: 50px;
    }
    ${Media.MobileL} {
      margin-top: 20px;
    }
    ${Media.MobileM} {
      font-size: 40px;
    }
  }
  hr {
    border: none;
    height: 10px;
    width: 88px;
    background: #2980b9;
  }

  p {
    font-family: "Lato";
    margin-top: 180px;
    margin-left: 100px;
    font-size: 42px;
    color: #ffffff;
    max-width: 50%;
    text-align: left;
    float: left;
    ${Media.Desktop} {
      font-size: 40px;
    }
    ${Media.Tablet} {
      font-size: 35px;
      margin-top: 50px;
    }
    ${Media.MobileL} {
      margin: auto;
      margin-top: 50px;
      text-align: center;
      font-size: 20px;
      max-width: 80vw;
    }
  }

  .OurHistories {
    position: relative;
    margin-top: -530px;
    ${Media.Desktop} {
      margin-top: -300px;
    }
    ${Media.Tablet} {
      margin-top: -250px;
    }
    ${Media.MobileL} {
      margin-top: -100px;
    }
    ${Media.MobileM} {
      margin-top: -50px;
    }
  }
`;
