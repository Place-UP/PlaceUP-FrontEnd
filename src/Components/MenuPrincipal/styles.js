import styled from "styled-components";

const media = {
  Tablet: "@media(max-width:900px)",
  Mobile: "@media(max-width:675px)",
  MobileS: "@media(max-width:400px)",
};

export const Section = styled.section`
  position: fixed;
  right: 0pt;
  width: 300px;
  height: 100vh;
  background-color: #ECF0F1;
  margin: auto;
  overflow-x: hidden;
  transition: width 0.5s;
  padding-top: 30px;
`;

export const Profile = styled.div`
  width: 100%;
  background color: #202020;

  .profile{
    width: 90%;
    background-color: white;
    border-radius: 50px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  h1{line-height: 60px;}

  .iconExit{
    width: 45px;
    height: 50px;
    padding-right: 10px;
    cursor: pointer; 
    padding-top: 5px;
  }
`;

export const DarkMode = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0px;

  .toggle-control { display: none;  }
  
  input.toggle-control + label {
    position: relative;
    display: block;
    width: 40px;
    height: 20px;
    background: #ddd;
    border-radius: 60px;
    cursor: pointer;
    outline: none;
    user-select: none;
  }

  input.toggle-control + label::before, input.toggle-control + label::after {
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    right: 1px;
    content: '';
    transition: all 0.4s;
  }		

  input.toggle-control + label::before {
    background: white;
    border-radius: 60px;
  }

  input.toggle-control + label::after {
    width: 18px;
    background: #fff;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  input.toggle-control:checked + label::before { background: #202020; }

  input.toggle-control:checked + label::after { margin-left: 20px; }
`

export const Reserva = styled.div`
width: 90%;
margin: 20px 0px 0px 5%;
text-align: center;
background-color: white;
border-radius: 20px;
padding-bottom: 30px;
`;

export const Sugestoes = styled.div`
  width: 90%;
  margin: 200px 0px 0px 5%;
  text-align: center;
  background-color: white;
  border-radius: 20px;
  padding-bottom: 30px;

  h1{
  font-size: 22px;
  padding-top: 30px;
  }
`

export const ProfileSugestao = styled.div`
  margin-top: 30px;
  width: 100%;
  background color: #202020;
  display: flex;
  flex-direction: row;
  border-left: 3px solid #2980B9;

  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 15%;
  }

  h2{
    margin-left: 3%;
    line-height: 50px;
  }
`;