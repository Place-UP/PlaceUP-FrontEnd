import styled from "styled-components";

const Media = {
  Desktop: "@media(max-width:1189px)",
  Notebook: "@media(max-width:928px",
  Tablet: "@media(max-width:768px)",
  MobileL: "@media(max-width:535px)",
  MobileM: "@media(max-width:375px)",
};

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
  background-color: pink;
;
`
export const Inform = styled.div`
width: 70%;
margin-bottom: 50px;
display: flex;
flex-direction: column;
margin-left:auto;
margin-right: auto;
`;

export const Locate = styled.div`
  background-color: red;
  margin-top: 40px;
  width: auto;
  display: flex;
`

export const NameEdit = styled.div`
  background-color: green;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20px;
  flex-wrap: wrap;
  margin:auto;

  .name {
    font-weight: bold;
    display: flex;
  }

  .edit {
    color: blue;
    height: 20px;
    cursor: pointer;
    display: flex;
    position: relative;
    background-color: beige;
  }
  .edit:hover {
    text-decoration: underline 2px green;
  }
`;



export const Sections = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: brown;

  details {
    background-color: red;
    display: flex;
    width: 20%;
  }

  details[open] {
    summary {
      text-decoration: underline 2px green;
      font-weight: 500;
    }
  }

  summary {
    width: 40%;
    height: 30px;
    margin-top: 10px;
    cursor: pointer;
    list-style: none;
  }
  summary:hover {
    text-decoration: underline 2px green;
  }
  .Informações[open],.Endereço[open] {
    position: absolute;
    width: 80%;
  }

  .InfoPessoal {
    background-color: blue;
    position: relative;
  }

  .InfoLocal {
    background-color: green;
  }

  input, select{
    margin-bottom: 20px;
    margin-top: 5px;
    width: 150px;
    margin-left: 2%;
    border:none;
  }


  label{
    margin-bottom:20px;
    border-bottom: 2px solid red;
  }
  p{
color:violet;
  }
`;
