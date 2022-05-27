import styled from "styled-components";

const Media = {
  Desktop: "@media(max-width:1440px)",
  Laptop: "@media(max-width:1024px)",
  Tablet: "@media(max-width:768px)",
  MobileL: "@media(max-width:550px)",
  MobileM: "@media(max-width:375px)",
};
export const Main = styled.main`
  width: 100%;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Media.MobileL} {
      background: #2980b9;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .logomob {
      display: none;
      ${Media.MobileL} {
        display: block;
        width: 88px;
        height: 88px;
        margin: auto;
      }
    }
    .logoBackground {
      ${Media.MobileL} {
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
        ${Media.MobileL} {
          display: none;
        }
      }
      ${Media.MobileL} {
        margin-right: 0;
      }
    }
  }
`;

export const Banner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -70px;
  div h1 {
    color: #344758;
    font-size: 54px;
    font-family: "Bakbak One";
    margin-bottom: 90px;
    margin-left: 150px;
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
  }
`;
export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Card = styled.div`
  width: 407px;
  height: 454px;
  background: #f8f6f6;
  border-radius: 57px;
  box-shadow: ${(props) => props.primary};
  margin-top: 150px;
`;

export const Cards = styled.main`
  display: flex;
  &:nth-child(2) {
    margin-bottom: 10%;
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
    font-size: 64px;
    line-height: 90px;
    color: #ecf0f1;
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
  }

  .OurHistories {
    position: relative;
    margin-top: -530px;
  }
`;
