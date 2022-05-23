import styled from "styled-components";

const Media = {
  Desktop: "@media(max-width:1189px)",
  Tablet: "@media(max-width:768px)",
  MobileL: "@media(max-width:550px)",
  MobileM: "@media(max-width:375px)",
};
export const Main = styled.main`
  width: 100%;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Media.MobileL} {
      background: #2980b9;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .logomob {
      display: none;
      ${Media.MobileL} {
        display: block;
        width: 88px;
        height: 88px;
        margin: auto;
      }
    }
    .logoBackground {
      ${Media.MobileL} {
        display: none;
      }
    }
    div {
      margin-right: 100px;
      span {
        background-color: #2980b9;
        border-radius: 15px;
        padding: 10px 30px;
        color: white;
        font-family: Lato;
        ${Media.MobileL} {
          display: none;
        }
      }
      ${Media.MobileL} {
        margin-right: 0;
      }
    }
  }

  
`;
