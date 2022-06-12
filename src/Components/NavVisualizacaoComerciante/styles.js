import styled from "styled-components";

const media = {
  Tablet: "@media(max-width: 935px)",
  Mobile: "@media(max-width: 600px)",
};

export const Section = styled.section`
  .mainMenu {
    position: fixed;
    right: 0pt;
    width: 20%;
    height: 100vh;
    margin: auto;
    transition: width 0.5s;
    padding-top: 30px;
  }

  .mainMenu-Mobile {
    max-width: 400px;
    width: 95%;
    height: 100vh;
    background-color: #ecf0f1;
    margin: auto;
    transition: width 0.5s;
    padding-top: 100px;
  }

  .mobile {
    position: relative;
    display: none;
  }

  .navbar {
    position: relative;
    min-height: 100px;
    font-size: 16px;
  }

  .hamburger {
    display: none;
    cursor: pointer;
    margin: 30px 0;
  }

  .ContainerPlace {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    margin-right: 13px;
    .DefaulConfig {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 30px;
      gap: 10px;

      p {
        font-family: "Inter";
        font-weight: 500;
        font-size: 16px;
        margin: auto;
        text-align: center;
      }

      .IconMenu {
        height: 20px;
        width: 20px;
      }
    }
    .PlaceArea {
      img {
        display: block;
        margin: auto;
        margin-top: 20px;
      }
      h1 {
        font-family: "Inter";
        font-weight: 600;
        font-size: 24px;
        margin-top: 20px;
        text-align: center;
        margin-bottom: 40px;
      }
    }
    .WorkTimePlace {
    }
    .Avaliation {
      .ImageStars {
        display: block;
        margin: auto;
      }
    }

    .Location {
    }
    .Acessible {
      p {
        color: #4fce63;
      }
    }
  }
  .SectionPlace {
    margin-top: 30px;
    max-height: 100px;
    overflow: auto;
    direction: rtl;
    text-align: left;
    &::-webkit-scrollbar {
      width: 8px;
      height: 48px;
      border: none;
    }
    span {
      display: flex;
      align-items: flex-start;
      font-family: "Lato";
      font-weight: 600;
      font-size: 16px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  .TitleCorredores {
    font-family: "Lato";
    font-weight: 600;
    font-size: 22px;
  }
  .ContainerCorredor {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 50px;
    flex-direction: column;
  }

  ${media.Tablet} {
    .mainMenu {
      display: none;
    }

    .hamburger {
      display: block;
      padding: 0 1%;
      padding-left: 20px;
    }

    .mobile {
      float: right;
      margin: 7px 10% 0 2%;
      display: block;
      z-index: 3;
    }

    .desktop {
      display: none;
    }

    .navbar {
      width: 100%;
      top: 0;
    }

    .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
      transform: translateY(10px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
      transform: translateY(-10px) rotate(-45deg);
    }

    .nav-menu.active {
      right: 0;
    }

    .nav-menu {
      position: fixed;
      right: -100%;
      top: -20px;
      height: 100vh;
      width: 50%;
      transition: 0.3s;
      list-style-type: none;
    }

    .nav-link {
      margin: auto;
    }

    .nav-item {
      width: 100%;
      margin: 10px 0;
      border-bottom: black 1px solid;
    }
  }

  ${media.Mobile} {
    .hamburger {
      display: block;
      padding-left: 200px;
    }

    .nav-menu {
      position: fixed;
      right: -100%;
      top: -20px;
      height: 100vh;
      width: 98%;
      transition: 0.3s;
      list-style-type: none;
    }
  }
`;