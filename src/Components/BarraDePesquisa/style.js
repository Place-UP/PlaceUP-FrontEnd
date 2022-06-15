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
  ${Media.Laptop} { width: 85%; }
`;

export const Carrinho = styled.div`
    position: relative;
    margin-right: 25px;

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

    .car {
      width: 30px;
      height: 30px;
      cursor: pointer;
      color: ${({ theme }) => theme.fontColor};
      &:nth-child(1) {
        margin-left: 10px;
      }
      &:nth-child(2) {
        cursor: pointer;
      }
    }
`

export const SearchBar = styled.div`
width: 90%;
height: 53px;
display: flex;
align-items: center; 
background: white;
border-radius: 26.5px;
font-family: "Poppins";
background-color: ${({ theme }) => theme.cards};

.icon {
  min-width: 20px;
  min-height: 20px;
  font-size: 1.5rem;
  padding: 15px;
  color: ${({ theme }) => theme.fontColor};
}

input {
  width: 100%;
  background-color: transparent;
  box-shadow: 0;
  border: 0 none;
  outline: 0;
  padding-left: 2px;
  color: ${({ theme }) => theme.fontColor};

  &::placeholder {
    color: ${({ theme }) => theme.fontColor};
    ${Media.Tablet} {  
      color: transparent;
      &:hover {
        color: black;
        width: 20vw;
      }
    }
  }
}

${Media.Tablet} {    
  width: 50px;
  &:hover {
    transition: 0.5s;
    width: 30vw;
  }
} 
`;

export const Filter = styled.div`
position: absolute;
width: 64%;
height: 50%;
text-align: center;
background-color: #fff;
margin-top: 5px;
border: 1px solid rgb( 180, 180, 180 );
border-radius: 10px;
z-index: 10;
scroll-behavior: smooth;
overflow-y: auto;

&::-webkit-scrollbar{  display: none; }

.VisuBarSearch{
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover{
    opacity: 0.6;
  }

  p{
    width: 20%;
  }

  span{
    width: 20%;
    font-size: 1.2rem;
  }

  img{
    width: 125px;
  }
}

${Media.Tablet}{ 
  position: absolute;
  width: 48%;
  height: 50%;
  text-align: center;
  background-color: #fff;
  margin-top: 5px;
  border: 1px solid rgb( 180, 180, 180 );
  border-radius: 10px;
  z-index: 10;
  scroll-behavior: smooth;
  overflow-y: auto;
  
  &::-webkit-scrollbar{  display: none; }

  .VisuBarSearch{
    cursor: pointer;
    width: 100%;      
    display: block;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 10px auto;
    transition: all 0.3s ease-in-out;

    &:hover{  opacity: 0.6;  }

    p{  
      text-align: center;
      margin: 20px;
      width: auto;
    }

    span{
      text-align: center;
      font-size: 1.2rem;
    }

    img{  
      width: 125px;
      height: 125px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px auto;
    }
  }
}
`