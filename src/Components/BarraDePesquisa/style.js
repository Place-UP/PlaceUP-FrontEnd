import styled from "styled-components";

const Media = {
  Desktop: "@media(max-width:1300px)",
  Laptop: "@media(max-width:1024px)",
  Tablet: "@media(max-width:768px)",
  MobileL: "@media(max-width:635px)",
  MobileM: "@media(max-width:375px)",
};
export const Main = styled.main`
  width: 90%;
  display: block;
  margin: auto;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon {
    width: 30px;
    height: 30px;

    &:nth-child(1) {
      margin-left: 10px;
    }
    &:nth-child(2) {
      cursor: pointer;
    }
  }
`;
export const SearchBar = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  width: 40vw;
  height: 53px;
  background: #ffffff;
  border-radius: 26.5px;
  font-family: "Poppins";
  ${Media.Tablet} {
    width: 50px;
    &:hover {
      transition: 0.5s;
      width: 40vw;
    }
  }

  input {
    width: 37vw;
    background-color: transparent;
    box-shadow: 0;
    border: 0 none;
    outline: 0;
    margin-left: 10px;
    ${Media.Tablet} {
      position: absolute;
      &:hover {
        position: unset;
      }
    }
    &::placeholder {
      color: black;
      ${Media.Tablet} {
        color: transparent;
        &:hover {
          color: black;
          width: 40vw;
        }
      }
    }
  }
`;
