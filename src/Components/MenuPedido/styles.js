import styled from "styled-components";

const media = {
  Tablet: "@media(max-width: 935px)"
};

export const Section = styled.section`
  .menuPrincipal{
    position: fixed;
    right: 0pt;
    max-width: 400px;
    width: 23%;
    height: 100vh;
    background-color: #ECF0F1;
    margin: auto;
    transition: width 0.5s;
    padding-top: 30px; 
  }

  span{ 
    color: #166619;    
    font-weight: bold;
  }

  ${media.Tablet} {
    .menuPrincipal{   display: none;   }
  }    
`

export const Profile = styled.div`
  width: 100%;

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

  h1{
    line-height: 60px;    
    font-family: 'Lato', cursive;
  }

  .iconExit{
    width: 15%;
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
    background: #202020;
    border-radius: 60px;
  }

  input.toggle-control + label::after {
    width: 18px;
    background: white;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  input.toggle-control:checked + label::before { background: white; }

  input.toggle-control:checked + label::after { margin-left: 20px; }
`

export const Avaliacao = styled.div`
  width: 90%;
  margin: 50px 0px 0px 5%;
  text-align: center;
  background-color: white;
  border-radius: 20px;
  padding-bottom: 20px;

  img{
    width: 100px;
    height: 100px;
    padding: 20px 0px 10px 0px;
    border-radius: 50%;
  }

  h1{
    font-size: 20px;
    font-family: 'Bakbak One', cursive;
  }

  p{
    font-size: 18px;
    padding-top: 20px;
    font-weight: 700px;
    font-family: 'Lato', cursive;
  }
`

export const ProfileSugestao = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: center;
  display: inline-block;
  background-color: white;

  textarea{
    width: 90%;
    height: 150px;
    padding-left: 10px;
    border-radius: 10px;
    border: 1px solid black;
    resize: none;
  }

  input{
    width: 120px;
    height: 40px;
    margin: 15px 0px 0px 0px;
    border-radius: 20px;
    font-size: 17px;
    color: white;
    cursor: pointer;
    background-color: #297FB8;
  }

  h2{
    margin-left: 3%;
    line-height: 50px;  
    font-size: 20px;  
    font-weight: bold;
    font-family: 'Lato', cursive;
  }
`;