import styled from "styled-components";
const Media = {
  Desktop: "@media(max-width:1189px)",
  Notebook: "@media(max-width:928px",
  Tablet: "@media(max-width:768px)",
  MobileL: "@media(max-width:535px)",
  MobileM: "@media(max-width:375px)",
};

export const EndPage = styled.div`
  width: 80%;
  height: 50%;
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: 0;

  img {
    width: 100%;
  }
`;
export const Main = styled.main`
  width: 100%;
`;

export const Body = styled.body`
  width: 80%;
  height: 570px;
  margin-left: 13%;
  margin-right: 28%;
  flex-wrap: wrap;

  .Title {
    position: relative;
    height: 90px;
    top: 13%;
    ${Media.Tablet} {
      margin-left: 4%;
    }
    ${Media.MobileL} {
      margin-left: 6%;
    }
    p {
      color: ${({ theme }) => theme.title};
      font-weight: bold;
      font-size: 40px;
    }
  }
`;

export const Photo = styled.div`
  width: 25%;
  ${Media.Tablet} {
    width: 25%;
    margin-left: 4%;
  }
  ${Media.MobileL} {
    width: 70%;
    margin-left: 6%;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Inf = styled.div`
  height: auto;
  flex-direction: row;
  display: flex;
  margin-top: 55px;
  position: relative;
  font-size: 17px;
`;
export const Inform = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const Locate = styled.div`
  /* background-color: red; */
  margin-top: 40px;
  width: auto;
  display: flex;
  margin-bottom: 25px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  color: ${({ theme }) => theme.fontColor};
  line-height: 38px;
`;

export const NameEdit = styled.div`
  /* background-color: green; */
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20px;
  flex-wrap: wrap;

  .name {
    font-weight: bold;
    display: flex;
    font-family: "Bakbak One";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 56px;
    color: ${({ theme }) => theme.fontColor};
  }

  .edit {
    /* color: blue; */
    height: 20px;
    cursor: pointer;
    display: flex;
    position: relative;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: #2980b9;
    /* background-color: beige; */
  }
  .edit:hover {
    text-decoration: underline 2px #2980b9;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme }) => theme.title};
  margin-top: 5%;
  .corBtn {
    border-bottom: 2px solid #2980b9;
  }
  button {
    cursor: pointer;
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
  }

  button:hover {
    border-bottom: 2px solid #2980b9;
  }
`;

export const Sections = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* background-color: brown; */

  .active:checked {
    display: block;
  }

  .none {
    display: none;
  }

  .Informações,
  .Endereço {
    position: absolute;
    width: 80%;
    margin-top: 5%;
    /* aqui que eu coloco o display:none */
  }

  .InfoPessoal,
  .InfoLocal {
    position: relative;
    justify-content: space-between;
    display: grid;
    align-items: center;
    color: ${({ theme }) => theme.fontColor};
  }

  .A {
    margin-top: -15px;
  }
  .A,
  .B {
    margin-bottom: 25px;
  }

  input,
  select {
    margin-bottom: 20px;
    width: 50%;
    position: relative;
    margin-left: 2%;
    border: none;
    background-color: transparent;
    text-align: right;
    outline: none;
    float: right;  
  }

  select {
    background-color: ${({ theme }) => theme.cards};
  }

  Select {
    text-align: center;
  }
  .regiao{
    border-bottom: 2px solid #2980b9;
    margin-bottom: 30px;
  }
  .regiãoselect{
    border: none;
  }

  .Endereço input {
    width: 55%;
  }

  label {
    margin-bottom: 20px;
    border-bottom: 2px solid #2980b9;
    width: 600px;
    justify-content: center;
    font-weight: 500;
  }
  p {
    font-weight: 500;
  }

  .button {
    display: inline-block;
    border-radius: 7px;
    border: none;
    background: #2980b9;
    color: white;
    font-family: inherit;
    text-align: center;
    font-size: 13px;
    box-shadow: 0px 14px 56px -11px 2980b9;
    width: 10em;
    padding: 1em;
    transition: all 0.4s;
    cursor: pointer;
    margin-bottom: 30px;
    margin-top: -10px;
  }

  .button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.4s;
  }

  .button span:after {
    content: "Dados";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.7s;
  }

  .button:hover span {
    padding-right: 3.55em;
  }

  .button:hover span:after {
    opacity: 4;
    right: 0;
  }
`;
