import styled from "styled-components";

const Media = {
  Desktop: "@media(max-width:1189px)",
  Tablet: "@media(max-width:768px)",
  MobileL: "@media(max-width:550px)",
  MobileM: "@media(max-width:375px)",
};
export const Main = styled.main`
  height: 100vh;
  margin-left: 200px;
  ${Media.Tablet} {
    margin-left: 120px;
  }
  ${Media.MobileL} {
    margin-left: 100px;
  }
  ${Media.MobileM} {
    margin-left: 70px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .text {
    font-family: Bakbak One;
    font-size: 50px;
    color: #2d3e50;

    ${Media.Desktop} {
      font-size: 30px;
    }
    ${Media.Tablet} {
      font-size: 20px;
      max-width: 205px;
    }
    ${Media.MobileL} {
      font-size: 12px;
    }
    ${Media.MobileM} {
      font-size: 10px;
    }
  }

  .vectorCalculator {
    max-width: 600px;
    ${Media.Desktop} {
      max-width: 300px;
    }
    ${Media.Tablet} {
      max-width: 280px;
    }
    ${Media.MobileL} {
      width: 150px;
    }
    ${Media.MobileM} {
      width: 100px;
    }
  }
`;

export const HowToUseCalculator = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 0;
  img {
    max-width: 600px;

    ${Media.Desktop} {
      max-width: 200px;
    }
    ${Media.Tablet} {
      max-width: 180px;
    }
    ${Media.MobileL} {
      max-width: 100px;
    }
    ${Media.MobileM} {
      max-width: 88px;
    }
  }
  h1 {
    font-size: 40px;
    width: 80%;
    color: #2d3e50;
    font-family: "Bakbak One";
    text-align: center;
    margin: auto;
    ${Media.Desktop} {
      font-size: 25px;
    }
    ${Media.Tablet} {
      font-size: 20px;
    }
    ${Media.MobileL} {
      font-size: 15px;
    }
    ${Media.MobileM} {
      font-size: 10px;
    }
  }

  p {
    font-size: 30px;
    color: #2d3e50;
    font-family: "lato";
    width: 50%;
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
    ${Media.Desktop} {
      font-size: 20px;
    }
    ${Media.Tablet} {
      font-size: 15px;
      max-width: 170px;
    }
    ${Media.MobileL} {
      font-size: 12px;
      width: 119px;
    }
    ${Media.MobileM} {
      font-size: 8px;
      max-width: 100px;
    }
  }
`;

export const VideoHowtoUseCalculator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* margin-right: 50px; */
  h1 {
    margin-top: 100px;
    font-size: 50px;
    font-family: Bakbak One;
    color: #2d3e50;
    ${Media.Desktop} {
      font-size: 30px;
    }
    ${Media.Tablet} {
      font-size: 20px;
      margin-top: 40px;
    }
    ${Media.MobileL} {
      font-size: 12px;
    }
    ${Media.MobileM} {
      font-size: 10px;
    }
  }
  .ButtonGoToCalculator {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      margin-top: 10px;
      background-color: #2980b9;
      color: #fff;
      padding: 15px 30px;
      border-radius: 15px;
      font-size: 26px;

      ${Media.Tablet} {
        padding: 10px 25px;
        font-size: 12px;
      }
    }
  }
`;
