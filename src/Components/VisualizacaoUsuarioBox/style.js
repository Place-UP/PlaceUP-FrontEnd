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
  background: ${({ theme }) => theme.cards};
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
      box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.100);
      border-radius: 10px;
      object-fit: cover;

      ${Media.Tablet} {
        width: 222px;
      }
      ${Media.MobileM} {
        width: 172px;
      }
    }

    .containerIMG{
      position: relative;
      width: 100%;
    }

    .AddIcon {
      position: absolute;
      bottom: 10%;
      right: -10%;
      margin-right: 3px;
      cursor: pointer;
      width: 38px;
      height: 38px;
      background-color: #4FCE63;
      color: #fff;
      box-shadow: 1px 0px 18px -4px rgba(0, 0, 0, 0.54);
      border-radius: 50%;
     
      ${Media.Tablet} {
        margin-left: 177px;
      }
      ${Media.MobileM} {
        margin-left: 120px;
      }
    }

    .DeleteIcon{
      position: absolute;
      bottom: 5%;
      left: 5%;
      margin-right: 3px;
      cursor: pointer;
      width: 38px;
      height: 38px;
      background: #ffffff;
      box-shadow: 1px 0px 18px -4px rgba(0, 0, 0, 0.54);
      border-radius: 50%;
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
        font-size: 12px;
        color: ${({ theme }) => theme.fontColor};
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
      color: #F43D3D;
      text-decoration: line-through;
    }
  }
`;
