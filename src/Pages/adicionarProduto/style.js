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

  .active {
    color: green;
  }

  .none {
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
    margin-top: 50px;
    h1 {
      font-family: "Bakbak One";
      font-size: 48px;
      color: ${({ theme }) => theme.title};
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
    background-color: ${({ theme }) => theme.cards};
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
    width: 40%;
    height: 100%;
    background: #c5c5c5;
    background-color: ${({ theme }) => theme.body};
    border-radius: 20px;
    input[type="file"] {
      display: none;
    }
    label {
      position: absolute;
      margin: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }

  }
  .informationProduct {
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${({ theme }) => theme.fontColor};

    .active {
      background-color: #c5fae6;
      color: ${({ theme }) => theme.fontColor};
    }

    .never {
      color: red;
      margin: 10px 0;
    }
  }

  input {
    color: ${({ theme }) => theme.fontColor};
  }

  input[type="submit"] {
    padding: 15px;
    width: 60%;
    margin: auto;
    border-radius: 15px;
    margin-top: 5%;
    background-color: #2980b9;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #2975b9;
    }
  }

  .description {
    width: 80%;
    margin: auto;

    p {
      margin-top: 20px;
      font-family: "Lato";
      font-weight: 700;
      color: ${({ theme }) => theme.fontColor};
    }

    .description {
      padding-left: 20px;
      margin-top: 20px;
      width: 100%;
      height: 70px;
      background-color: ${({ theme }) => theme.body};
      border-radius: 10px;
      color: ${({ theme }) => theme.fontColor};
    }
  }
`;
