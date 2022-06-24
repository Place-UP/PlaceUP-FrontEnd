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
  margin-left: 70px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.body};
  ${Media.Laptop} {
    margin-left: 30px;
  }
  ${Media.NavMob} {
    margin-left: 50px;
    background-color: none;
  }
  .feed {
    position: relative;
    width: 80%;
    ${Media.NavMob} {
      width: 100%;
    }
  }
  .busca {
    width: 20%;
    ${Media.NavMob} {
      position: absolute;
      width: 90%;
    }
  }
`;