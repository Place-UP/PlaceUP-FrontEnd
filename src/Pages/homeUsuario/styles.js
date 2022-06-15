import styled from "styled-components";
import React from "react";
const media = {
  Tablet: "@media(max-width: 940px)",
  MobileM: "@media(max-width: 440px)",
  MobileS: "@media(max-width:320px)",
};

export const Home = styled.div`
  background-color: #ecf0f1;
`;

export const SectionSearch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 50%;

  ${media.MobileM} {
    width: 80%;
    margin-right: auto;
  }

  ${media.MobileS} {
    width: 60%;
    margin-right: auto;
  }
`;

export const SearchBar = styled.div`
  width: 90%;
  height: 53px;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 26.5px;
  font-family: "Poppins";
  font-color: black;

  .icon {
    min-width: 20px;
    min-height: 20px;
    font-size: 1.5rem;
    padding: 15px;
    color: black;
  }

  input {
    width: 100%;
    background-color: transparent;
    box-shadow: 0;
    border: 0 none;
    outline: 0;
    padding-left: 2px;
    color: black;

    &::placeholder {
      color: black;
      ${media.MobileM} {
        color: transparent;
        &:hover {
          color: black;
          width: 20vw;
        }
      }
    }
  }

  ${media.MobileM} {
    width: 50px;
    &:hover {
      transition: 0.5s;
      width: 30vw;
    }
  }
`;

export const Car = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  ${media.MobileM} {
    margin-right: 5%;
  }
`;

export const ContainerSearch = styled.div`
  position: absolute;
  width: 48%;
  height: 50%;
  text-align: center;
  background-color: #fff;
  margin-top: 5px;
  border: 1px solid rgb(180, 180, 180);
  border-radius: 10px;
  z-index: 10;
  scroll-behavior: smooth;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .VisuBarSearch {
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 0.6;
    }

    p {
      width: 20%;
    }

    span {
      width: 20%;
      font-size: 1.2rem;
    }

    img {
      width: 125px;
    }
  }

  ${media.Tablet} {
    position: absolute;
    width: 48%;
    height: 50%;
    text-align: center;
    background-color: #fff;
    margin-top: 5px;
    border: 1px solid rgb(180, 180, 180);
    border-radius: 10px;
    z-index: 10;
    scroll-behavior: smooth;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .VisuBarSearch {
      cursor: pointer;
      width: 100%;
      display: block;
      justify-content: space-around;
      align-items: center;
      border-bottom: 1px solid black;
      padding: 10px auto;
      transition: all 0.3s ease-in-out;

      &:hover {
        opacity: 0.6;
      }

      p {
        text-align: center;
        margin: 20px;
        width: auto;
      }

      span {
        text-align: center;
        font-size: 1.2rem;
      }

      img {
        width: 125px;
        height: 125px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px auto;
      }
    }
  }
`;

export const Filter = styled.div`
  width: 100%;
  margin: 30px auto;

  select {
    width: 150px;
    height: 40px;
    padding: 0px 4px;
    margin: auto 10px 10px 0px;
    border-radius: 20px;
  }

  select:nth-child(2) {
    width: 150px;
    height: 40px;
    padding: 0px 4px;
    margin: 10px auto 10px 0px;
    border-radius: 20px;
  }

  ${media.MobileM} {
    select {
      width: 150px;
      height: 40px;
      padding: 0px 4px;
      margin: 10px 0px;
      border-radius: 20px;
    }
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Category = styled.div`
  width: 60%;
  padding: 30px 0 30px 17%;

  h1 {
    font-size: 25px;
    margin-left: 5px;
    font-weight: 800;
    font-family: "Bakbak One", cursive;
  }

  .containerCategory {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 20px;
    justify-content: center;
    align-items: center;
    justify-content: space-between;

    img {
      width: 80px;
      height: 85px;
    }

    ${media.Tablet} {
      width: 100%;
      gap: 10px;
      grid: auto / auto auto;
    }

    ${media.MobileM} {
      width: 100%;
      grid-template-columns: auto auto auto 20px;
      grid: auto / auto;
      margin: 0 auto;
    }

    ${media.MobileS} {
      width: 100%;
      grid-template-columns: auto auto auto 20px;
      grid: auto / auto;
      margin: 0 auto;
    }
  }

  ${media.MobileM} {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FilterCategory = styled.div`
  width: 160px;
  height: 80px;
  border-radius: 8px;
  margin-top: 70px;
  text-align: center;
  background-color: white;

  img {
    width: 90px;
    height: 90px;
    font-size: 17px;
    margin-top: -50px;
  }
`;

export const InfoCategory = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;

  h2 {
    text-align: center;
    font-size: 14px;
    margin-left: 5px;
    font-weight: 600;
    cursor: pointer;

    &::before {
      content: "";
      border-left: 5px solid #e85959;
      padding-right: 8px;
    }
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    background-color: #e85959;
    color: white;
    font-size: 17px;
    border-radius: 4px;
    line-height: -200px;
    cursor: pointer;
    font-family: "Lato";
  }
`;
