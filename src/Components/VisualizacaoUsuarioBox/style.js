import styled from "styled-components";

const Media = {
  Desktop: "@media(max-width:1300px)",
  Laptop: "@media(max-width:1024px)",
  Tablet: "@media(max-width:768px)",
  MobileL: "@media(max-width:635px)",
  MobileM: "@media(max-width:375px)",
};
export const Main = styled.main`
  width: 90%;
  display: block;
  margin: auto;
`;

export const ContWhitePart = styled.div`
  background: #ffffff;
  border-radius: 20px;
  width: 100%;
  margin-top: 50px;
  height: 100vh;

  .Offers {
    /* margin: 30px; */
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-family: "Lato";
      font-size: 22px;
    }

    .FunctionCarousel {
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        font-family: "Lato";
        font-size: 14px;
        text-align: center;
      }
    }
  }
  .Carousel {
    width: 100%;
    height: 175px;
    /* margin: 30px; */
    .Item {
      position: relative;
      overflow: auto;
      /* width: 30vw;
      height: 20vh; */
    }
    .image {
      width: 8vw;
      height: 143px;
      background: #fbf3f3;
      box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      .AddIcon {
        cursor: pointer;
        width: 38px;
        height: 38px;
        background: #4fce63;
        border-radius: 50%;
      }
    }
  }
`;
