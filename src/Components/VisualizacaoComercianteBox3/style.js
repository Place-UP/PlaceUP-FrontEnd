import styled from "styled-components";

const Media = {
  Desktop: "@media(max-width:1300px)",
  Laptop: "@media(max-width:1024px)",
  Tablet: "@media(max-width:768px)",
  MobileL: "@media(max-width:635px)",
  MobileM: "@media(max-width:398px)",
  NavMob: "@media(max-width:935px)",
};
export const Main = styled.main`
  width: 90%;
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.cards};
  ${Media.NavMob} {
    background: none;
    width: 90%;
  }

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
      display: block;
      color: ${({ theme }) => theme.fontColor};

      ${Media.Tablet} {
        margin: auto;
      }
    }

    .scrollLeft {
      cursor: pointer;
      width: 25px;
      height: 25px;
      color: ${({ theme }) => theme.fontColor};

      ${Media.Tablet} {
        display: none;
      }
    }
    .scrollRight {
      width: 25px;
      height: 25px;
      cursor: pointer;
      color: ${({ theme }) => theme.fontColor};
      ${Media.Tablet} {
        display: none;
      }
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
  margin-top: 50px;
  display: flex;
  overflow: auto;
  scroll-behavior: smooth;
  gap: 40px;

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
      width: 220px;
      box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      object-fit: contain; 
        max-width: 220px;
        max-height: 220px;
        min-width: 220px;
        min-height: 220px;

      ${Media.Tablet} {
        width: 222px;
      }
      ${Media.MobileM} {
        width: 172px;
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
        color: ${({ theme }) => theme.fontColor};

        /* ${Media.MobileM} {
          font-size: 12px;
        } */
      }
      .Quant {
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        color: ${({ theme }) => theme.fontColor};
        font-size: 10px;
      }
    }
    .Price {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      color: ${({ theme }) => theme.fontColor};
    }

    .OldPrice {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 11px;
      text-decoration: line-through;
      color: #F43D3D;
    }
  }
`;
