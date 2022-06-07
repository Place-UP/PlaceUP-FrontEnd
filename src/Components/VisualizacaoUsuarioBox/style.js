import styled from "styled-components";

const Media = {
  Desktop: "@media(max-width:1300px)",
  Laptop: "@media(max-width:1024px)",
  Tablet: "@media(max-width:768px)",
  MobileL: "@media(max-width:635px)",
  MobileM: "@media(max-width:398px)",
};
export const Main = styled.main`
  width: 90%;
  display: block;
  margin: 0 auto;
  height: 100vh;
  background: white;

  border-radius: 20px;
  .Offers {
    margin: 30px;
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-family: "Lato";
      font-size: 22px;
    }

    .scrollLeft {
      cursor: pointer;
      ${Media.Tablet} {
        display: none;
      }
    }
    .scrollRight {
      cursor: pointer;
      ${Media.Tablet} {
        display: none;
      }
    }
    p {
      cursor: pointer;
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
`;

export const ContWhitePart = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  overflow: auto;
  scroll-behavior: smooth;
  gap: 100px;
  flex: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .Carousel {
    width: 90%;
    margin: auto;
    flex-direction: row;

    .Item {
      position: relative;
      overflow: auto;
    }
    .image {
      width: 350px;
      box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      object-fit: cover;

      ${Media.Tablet} {
        width: 222px;
      }
      ${Media.MobileM} {
        width: 172px;
      }
    }

    .AddIcon {
      margin-right: 3px;
      cursor: pointer;
      width: 38px;
      height: 38px;
      background: #4fce63;
      border-radius: 50%;
      margin-left: 300px;
      margin-bottom: 20px;
      margin-top: -43px;
      ${Media.Tablet} {
        margin-left: 177px;
      }
      ${Media.MobileM} {
        margin-left: 120px;
      }
    }
    .Info {
      margin-left: 10px;
      margin-top: 10px;
      width: 200px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      ${Media.MobileM} {
        width: 140px;
      }

      .SeparationPrices {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .Tittle {
        font-family: "Lato";
        font-size: 15px;
        font-weight: 700;
        /* ${Media.MobileM} {
          font-size: 12px;
        } */
      }
      .Quant {
        margin-left: 5px;
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 9px;
        color: #7a7979;
      }
    }
    .Price {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 11px;
    }

    .OldPrice {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 11px;
      color: #8b8383;
      text-decoration: line-through;
    }
  }
`;
