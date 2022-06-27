import styled from "styled-components";
const Media = {
  Desktop: "@media(max-width:1300px)",
  Laptop: "@media(max-width:1024px)",
  Tablet: "@media(max-width:768px)",
  MobileL: "@media(max-width:635px)",
  MobileM: "@media(max-width:398px)",
  NavMob: "@media(max-width:935px)",
};

export const Main = styled.div`
  margin-left: 70px;
  display: flex;
  justify-content: space-between;

  .active{
    color: green;
  }

  .none{
    background-color: red;
  }

  ${Media.Laptop} {
    margin-left: 30px;
  }
  ${Media.NavMob} {
    margin-left: 50px;
    background-color: none;
  }
  .Container1 {
    width: 80%;
    ${Media.NavMob} {
      width: 100%;
    }
  }
  .Container2 {
    width: 20%;
    ${Media.NavMob} {
      position: absolute;
      width: 90%;
    }
  }

  .cont {
    width: 80%;
    margin: auto;
  }
  .title {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding-top: 50px;
    h1 {
      font-family: "Bakbak One";
      font-size: 48px;
      color: #333333;
    }
    .hrs {
      width: 100px;
      height: 5px;
      background: #2980b9;
      border: none;
    }
  }
  .whitePart {
    margin: auto;
    margin-top: 20px;
    background-color: #fff;
    width: 80%;

    border-radius: 20px;
    padding: 20px 0;
  }
  .contIntoArea {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .putImage {
    position: relative;
    width: 60%;
    margin-right: 5%;
    height: 366px;
    background: #c5c5c5;
    border-radius: 20px;
    input[type="file"] {
      display: none;
    }
    label {
      position: relative;
      margin: auto;
      top: 46%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background: #fff;
      width: 40%;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 20px;
      .icon-upload {
        width: 20px;
        height: 20px;
      }
      p {
        font-family: "Lato";
        font-size: 15px;
        color: #000000;
      }
    }
  }
  .informationProduct {
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    .active {
      background-color: #C5FAE6;
      
    }

    .never{
      color: red;
    }

    }
      input{
        width: 100%;
      }
    


  .description {
    width: 80%;
    margin: auto;
    p {
      margin-top: 20px;
      font-family: "Lato";
      font-weight: 700;
      color: #000000;
    }
    input {
      margin-top: 20px;
      width: 100%;
      height: 50px;
      background: #c5c5c5;
      border-radius: 20px;
   
    }
  }
`;
