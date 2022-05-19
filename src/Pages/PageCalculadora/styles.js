import styled from "styled-components";

const Media = {
  Desktop: "@media(max-width:1024px)",
  MobileL: "@media(max-width:425px)",
  MobileM: "@media(max-width:375px)",
  MobileS: "@media(max-width:35px)",
};
export const Main = styled.main`
  height: 100vh;
  margin-left: 120px;
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
    ${Media.MobileL} {
      font-size: 20px;
    }
  }

  .vectorCalculator {
    max-width: 600px;
    ${Media.Desktop} {
      max-width: 300px;
    }
    ${Media.MobileL} {
      width: 200px;
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
    ${Media.MobileL} {
      font-size: 20px;
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
    ${Media.MobileL} {
      font-size: 15px;
    }
  }
`;
