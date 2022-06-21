import styled from "styled-components";
const Media = {
  Desktop: "@media(max-width:1189px)",
  Notebook: "@media(max-width:928px",
  Tablet: "@media(max-width:768px)",
  MobileL: "@media(max-width:535px)",
  MobileM: "@media(max-width:375px)",
};

export const EndPage = styled.div`
width: 50%;
height: 50%;
position: fixed;
justify-content: end;
`
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

    p {
      color: #2d3e50;
      font-weight: bold;
      font-size: 40px;
    }
  }
`;

export const Photo = styled.div`
  width: 200px;
  height: 200px;
`;

export const Inf = styled.div`
  height: auto;
  flex-direction: row;
  display: flex;
  margin-top: 55px;
  position: relative;
  /* background-color: pink; */ ;
`;
export const Inform = styled.div`
  width: 70%;
  margin-bottom: 50px;
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
`;

export const NameEdit = styled.div`
  /* background-color: green; */
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20px;
  flex-wrap: wrap;
  margin: auto;

  .name {
    font-weight: bold;
    display: flex;
  }

  .edit {
    /* color: blue; */
    height: 20px;
    cursor: pointer;
    display: flex;
    position: relative;
    /* background-color: beige; */
  }
  .edit:hover {
    text-decoration: underline 2px #2980b9;
  }
`;

export const Sections = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* background-color: brown; */

  details {
    /* background-color: red; */
    display: flex;
    width: 20%;
  }

  details[open] {
    summary {
      text-decoration: underline 2px #2980b9;
      font-weight: 700;
    }
  }

  summary {
    width: 40%;
    height: 30px;
    margin-top: 40px;
    cursor: pointer;
    list-style: none;
    margin-bottom: 20px;
  }
  summary:hover {
    text-decoration: underline 2px #2980b9;
    transition: 0.2s;
  }
  .Informações[open],
  .Endereço[open] {
    position: absolute;
    width: 80%;
    margin-top: 5%;
  }

  .InfoPessoal,
  .InfoLocal {
    position: relative;
    justify-content: space-between;
    display: grid;
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
    margin-top: 5px;
    width: 41%;
    position: relative;
    margin-left: 2%;
    border: none;
    background-color: transparent;
    /* background-color: transparent; */
  }

  label {
    margin-bottom: 20px;
    border-bottom: 2px solid #2980b9;
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
