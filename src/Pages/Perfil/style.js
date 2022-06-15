import styled from "styled-components";

const Media = {
  Desktop: "@media(max-width:1189px)",
  Notebook: "@media(max-width:928px",
  Tablet: "@media(max-width:768px)",
  MobileL: "@media(max-width:535px)",
  MobileM: "@media(max-width:375px)",
};

export const Main = styled.main``;

export const Bodys = styled.body`
  .Title {
    position: relative;
    height: 90px;
    left: 3%;
    top: 9%;
    ${Media.Tablet} {
      top: -50px;
    }

    p {
      color: #2d3e50;
      font-weight: bold;
      font-size: 40px;
      ${Media.Tablet} {
        font-size: 30px;
      }
    }
  }
`;
