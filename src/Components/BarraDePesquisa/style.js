import styled from "styled-components";
import { Back } from './../../Pages/cadastroUsuario/style';

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  
`;

export const Carrinho = styled.div`
    position: relative;


    span{
      position: absolute;
      left: 30px;
      text-align: center;
      background-color: #f01;
      color: #fff;
      width: 15px;
      height: 15px;
      border-radius: 50%;
    }


    .icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
    &:nth-child(1) {
      margin-left: 10px;
    }
    &:nth-child(2) {
      cursor: pointer;
    }
  }
`

export const SearchBar = styled.div`
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
    width: 100%;
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

