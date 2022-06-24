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
  ${Media.Laptop} {
    width: 80%;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;

  .icon {
    padding: 10px;
    width: 25px;
    height: 25px;
    color: ${({ theme }) => theme.fontColor};

    margin-left: 10px;  
  }
`;
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 53px;
  background-color: ${({ theme }) => theme.cards};
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
    width: 100%;
    background-color: transparent;
    box-shadow: 0;
    border: 0 none;
    outline: 0;
    margin-left: 10px;
    color: ${({ theme }) => theme.fontColor};
    ${Media.Tablet} {
      position: absolute;
      &:hover {
        position: unset;
      }
    }
    &::placeholder {
      color: ${({ theme }) => theme.fontColor};
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

export const Notification = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
      cursor: pointer;
      font-size: 2rem;
    }
`
