import styled from "styled-components";
import { Buttons } from './../../Pages/Perfil/style';

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
  margin: 0 auto;

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
  align-items: center;
  justify-content: flex-start;
  overflow: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  .ContainerCarousel{
    padding: 15px;
    position: relative;
    width: 100%;
    background-color: ${({ theme }) => theme.cards};
    border-radius: 15px;
  }

  .Carousel {
    position: relative;
    width: 80%;
    margin: auto;

    .boxImg{
      width: 100%;
      height: 300px;
      flex: content;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image{
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 15px;  
    }

    }

     .AddIcon {
      position: absolute;
      bottom: 20%;
      right: 0;
      margin-right: 3px;
      cursor: pointer;
      width: 38px;
      height: 38px;
      background-color: #4FCE63;
      color: #fff;
      border-radius: 50%;

      ${Media.Tablet} {
        margin-left: 177px;
      }
      ${Media.MobileM} {
        margin-left: 120px;
      }
    }

    .Info {
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
        padding-top: 10px;
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

      .description{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
    }

    .Price {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      color: ${({ theme }) => theme.fontColor};
    }

       .Quant {
        margin-left: 5px;
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 0.8rem;
        color: #7a7979;
      }  
`
