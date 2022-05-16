import styled from "styled-components";

const media = { TabletAndMobile: "@media screen and (max-width: 863px)" };

export const Footergeral = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 0;
  width: 100%;
  height: auto;
  text-align: center;
  background-color: #2c3e50;

  ${media.TabletAndMobile} {
    .container {
      width: 100%;
      padding: 20px 0px;
      display: block;
      flex-direction: row;
      justify-content: space-evenly;
    }

    .logo-img {
      margin: 0px 0px 0px 10px;
    }

    .linksFooter {
      display: block;
    }

    .linksFooter a {
      text-align: center;
    }

    .links {
      padding: 0px;
    }

    .linksFooter .links:nth-child(2) {
      margin-top: 5px;
    }

    .Social {
      text-align: center;
      margin-top: 50px;
    }

    .Socialh1 {
      text-align: center;
      font-size: 20px;
      margin: 50px 0;
      color: white;
    }

    .icons {
      margin: 50px auto;
      padding: 0px 15px 0px 0px;
      display: inline;
    }

    .Copyright {
      padding: 0 2%;
      font-size: 18px;
    }
  }
`;

export const ContainerFooter = styled.div`
  width: 100%;
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const LinksFooter = styled.div`
  display: flex;
  a {
    font-family: "Lato", sans-serif;
    margin: 20px 0;
    display: block;
    font-size: 18px;
    cursor: pointer;
    text-align: left;
    color: white;
  }
  .links {
    margin: 20px;
    display: block;
  }

  .links:nth-child(2) {
    margin-top: 59px;
    display: block;
  }
`;

export const Logo = styled.img`
  width: 120px;
  height: 110px;
  margin: 20px 0;
  cursor: pointer;
`;

export const Icons = styled.span`
  width: 40px;
  height: 40px;
  margin: 0px 20px;
  color: white;
  cursor: pointer;
`;

export const FooterP = styled.p`
  font-family: "Lato", sans-serif;
  text-align: center;
  font-size: 20px;
  color: white;
`;

export const FooterH1 = styled.h1`
  text-align: center;
  font-size: 18px;
  margin: 20px 0;
  color: white;
  font-family: "Lato", sans-serif;
`;
