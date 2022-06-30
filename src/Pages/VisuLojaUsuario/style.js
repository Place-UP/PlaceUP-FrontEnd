import styled from "styled-components";
const Media = {
    Desktop: "@media(max-width:1300px)",
    Laptop: "@media(max-width:1024px)",
    Tablet: "@media(max-width:768px)",
    MobileL: "@media(max-width:635px)",
    MobileM: "@media(max-width:398px)",
    NavMob: "@media(max-width:935px)",
};

export const Main = styled.div`
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  ${Media.Laptop} {
    margin-left: 30px;
  }
  ${Media.NavMob} {
    margin-left: 50px;
    background-color: none;
  }
  .Container1 {
    width: 75%;
    margin: auto;
    ${Media.NavMob} {
      width: 100%;
    }
  }
  .Container2 {
    width: 20%;
    ${Media.NavMob} {
      position: absolute;
      width: 90%;
    }
  }
`;