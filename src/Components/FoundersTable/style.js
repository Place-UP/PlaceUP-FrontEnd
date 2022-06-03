import styled from "styled-components";
import PaintingFounders from "./img/PaintingFounders.svg";
export const FoundersPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .Title {
    h1 {
      margin-top: 100px;
      font-family: "Bakbak One";
      font-weight: bold;
      font-size: 64px;
      line-height: 90px;
      color: #2c3e50;
    }

    hr {
      background: #2980b9;
      height: 5px;
      width: 100px;
      border: none;
    }
    margin-bottom: 90px;
  }
  .contPainel {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 80%;
    width: 90vw;
    background: #2980b9;
    padding-bottom: 37px;

    .circleBlue {
      position: relative;
      background: #2980b9;
      border-radius: 50% 50% 50% 50%;
      height: 147px;
      width: 47%;
      margin-top: -64px;

      .yellowCircle {
        position: relative;
        background: #e7c822;
        border: 5px solid #c8ad1d;
        border-radius: 50%;
        width: 88px;
        height: 88px;
        align-items: center;
        margin: auto;
        margin-top: 30px;
      }
    }
  }
  .WhitePart {
    width: 95%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
    gap: 50px;
    background: white;
  }

  .AreaContent {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      margin-top: 10px;
    }
    h1 {
      margin-top: 10px;
      font-family: "Bakbak One";
      font-weight: 400;
      font-size: 32px;
      color: #2c3e50;
      margin-bottom: 10px;
    }
  }
`;
