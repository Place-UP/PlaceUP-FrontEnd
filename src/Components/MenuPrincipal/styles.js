import styled from "styled-components";

const media = {
  Tablet: "@media(max-width: 935px)",
  Mobile: "@media(max-width: 600px)",
  MobileS: "@media(max-width: 340px)"
};

export const Section = styled.section`
  .mainMenu{
    position: fixed;
    right: 0pt;
    max-width: 400px;
    width: 23%;
    height: 100vh;
    background-color: ${({ theme }) => theme.barRight};
    margin: auto;
    transition: width 0.5s;
    padding-top: 30px; 
  }

  .mainMenu-Mobile{
    max-width: 450px;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.barRight};
    margin: auto;
    transition: width 0.5s;
    padding-top: 100px; 
  }

  .mobile{
    position: relative;
    display: none;
  }

  .navbar{
      position: relative;
      min-height: 100px;
      font-size: 16px;
  }

  .hamburger{
      display: none;
      cursor: pointer;
      margin: 30px 0;
  }

  .bar{
    display: block;
    width: 30px;
    height: 5px;
    margin: 5px auto;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    background-color: ${({ theme }) => theme.fontColor};
}

  .bar:nth-child(1){
    position: fixed;    
    margin: 5px auto auto -20px;
  }

  .bar:nth-child(2){
    position: fixed;
    margin: 15px auto auto -20px;
  }

  .bar:nth-child(3){
    position: fixed;
    margin: 25px auto auto -20px;
  }

  ${media.Tablet} {
    .mainMenu{   display: none;   }

    .hamburger {
      display: block;
      margin-right: 35px;
    }    
  
    .mobile{   
        display: block;
        float: right;
        z-index: 99;
    }

    .desktop{display: none;}
    
    .navbar{
        width: 100%;
        top: 0;
    }

    .hamburger.active .bar:nth-child(2){  opacity: 0; }

    .hamburger.active .bar:nth-child(1){   transform: translateY(10px) rotate(45deg);   }

    .hamburger.active .bar:nth-child(3){  transform: translateY(-10px) rotate(-45deg);   }

    .nav-menu.active{right: 0;}

    .nav-menu{
        position: fixed;
        right: -100%;
        top: -20px;
        height: 100vh;
        width: 50%;
        transition: 0.3s;
        list-style-type: none;
    }

    .nav-link{     margin: auto;   }

    .nav-item{
        width: 100%;
        margin: 10px 0;
        border-bottom: black 1px solid;        
    }
  }    

  ${media.Mobile}{
    .hamburger {   display: block;   }    

    .nav-menu{
        position: fixed;
        right: -100%;
        top: -20px;
        height: 100vh;
        width: 75%;
        transition: 0.3s;
        list-style-type: none;
    }
  }   

  ${media.MobileS}{
    .hamburger {   display: block;   }    

    .nav-menu{
        position: fixed;
        right: -100%;
        top: -20px;
        height: 100vh;
        width: 100%;
        transition: 0.3s;
        list-style-type: none;
    }
  }   
`

export const Profile = styled.div`
  width: 100%;

  .profile{
    width: 90%;
    background-color: ${({ theme }) => theme.body};
    border-radius: 50px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .link{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img{
      width: 60px;
      height: 60px;
      border-radius: 50%;     
    }
  
    h1{
      line-height: 60px;    
      font-family: 'Lato', cursive;
      white-space: nowrap;
      overflow: hidden;
      margin-left: 20px;
      text-overflow: ellipsis;
      font-size: 20px;
      color: ${({ theme }) => theme.fontColor};
  
      ${media.Tablet} { font-size: 18px; }  
  
      ${media.Mobile} { font-size: 15px; } 
  
      ${media.MobileS} { font-size: 12px; }  
    }
  }

  .iconExit{
    min-width: 13%;
    width: 15%;
    height: 50px;
    padding-right: 10px;
    cursor: pointer; 
    padding-top: 5px;
    color: ${({ theme }) => theme.fontColor};
  }
`;

export const DarkMode = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0px;

  .toggle-control { display: none;  }
  
  input.toggle-control + label {
    position: relative;
    display: block;
    width: 40px;
    height: 20px;
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
    background: #297FB8;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  input.toggle-control:checked + label::before { background: black; }

  input.toggle-control:checked + label::after { margin-left: 20px; }
`

export const ContainerCalendar = styled.div`
  width: 100%;
  padding: 10px 0 30px 6%;
  
  .calendar{ 
    background-color: ${({ theme }) => theme.cards};
    color: ${({ theme }) => theme.fontColor};
    border-radius: 20px;
  }
`;

export const Suggestions = styled.div`
  width: 90%;
  margin: 20px 0px 0px 5%;
  text-align: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.body};
  padding-bottom: 30px;

  h1{
    color: #297FB8;
    font-size: 25px;
    padding-top: 20px;
    font-family: 'Lato', cursive;

    ${media.Tablet} { font-size: 18px; }  

    ${media.Mobile} { font-size: 15px; } 

    ${media.MobileS} { font-size: 12px; }  
  }
`

export const ProfileSuggestions = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-direction: row;
  border-left: 3px solid #2980B9;

  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 12%;
  }

  h2{
    margin-left: 5%;
    line-height: 50px;    
    font-family: 'Lato', cursive;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 20px;
    color: ${({ theme }) => theme.fontColor};

    ${media.Tablet} { font-size: 18px; }  

    ${media.Mobile} { font-size: 15px; } 

    ${media.MobileS} { font-size: 12px; }  
  }
`;