import styled from "styled-components";

const Media = {
  Desktop: "@media(max-width:1189px)",
  Notebook: "@media(max-width:928px",
  Tablet: "@media(max-width:768px)",
  MobileL: "@media(max-width:535px)",
  MobileM: "@media(max-width:375px)",
};

export const Main = styled.main``;

export const Body = styled.body`
  width: 60%;
  height: 570px;
  margin-left: 13%;
  margin-right: 28%;

  .Title {
    position: relative;
    height: 90px;
    top: 13%;
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

export const Photo = styled.div`
  width: 160px;
  height: 160px;
`;
 export const Inf = styled.div`
background-color: aqua;
width: 70%;
flex-direction: row;
display: flex;
margin-top:55px;
 `

 export const NameEdit = styled.div`
 background-color:green;
flex-direction: row;
display: flex;
justify-content: space-between;
 `
 export const Locate = styled.div`
 background-color:red;
 `
 