import styled from "styled-components";

const media = {
  Tablet: "@media(max-width: 940px)",
  MobileM: "@media(max-width: 440px)",
  MobileS: "@media(max-width:320px)",
};

export const Main = styled.div`
  background-color: ${({ theme }) => theme.body};

  ${media.Tablet} {   margin-left: 6%;   }  

  ${media.MobileM} {   margin-left: 6%;   }  

  ${media.MobileS} {   margin-left: 2%;  } 
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
  background-color: ${({ theme }) => theme.cards};
  border-radius: 26.5px;
  font-family: "Poppins";
  color: ${({ theme }) => theme.fontColor};

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
      ${media.MobileM} {
        color: transparent;
        &:hover {
          color: ${({ theme }) => theme.fontColor};
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
  color: ${({ theme }) => theme.fontColor};

  .carIcon {
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: ${({ theme }) => theme.fontColor};
  }

  ${media.MobileM} {   margin-right: 5%;  }
`;

export const ContainerSearch = styled.div`
  position: absolute;
  width: 48%;
  height: 50%;
  text-align: center;
  background-color: ${({ theme }) => theme.cards};
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
      color: ${({ theme }) => theme.fontColor};
    }

    span {
      width: 20%;
      font-size: 1.2rem;      
      color: ${({ theme }) => theme.fontColor};
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
    background-color: ${({ theme }) => theme.cards};
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
        color: ${({ theme }) => theme.fontColor};
      }

      span {
        text-align: center;
        font-size: 1.2rem;
        color: ${({ theme }) => theme.fontColor};
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
    padding: 0px 5px;
    margin: auto 10px 10px 0px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.cards};
    color: ${({ theme }) => theme.fontColor};
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
      margin: 10px auto;
      border-radius: 20px;
    }
    margin-right: auto;
    margin-left: 5%;
  }
`;

export const Category = styled.div`
  width: 60%;
  padding: 30px 0 30px 12%;

  h1 {
    font-size: 34px;
    margin-left: 5px;
    font-weight: 800;
    font-family: "Bakbak One", cursive;
    color: ${({ theme }) => theme.fontColor};

    ${media.Tablet} { font-size: 31px; }  

    ${media.MobileM} { font-size: 28px; }  
  
    ${media.MobileS} { font-size: 26px; }  
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
      width: 90px;
      height: 95px;
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
    margin-left: 15%;
    margin-right: auto;
  }

  ${media.MobileS} {
    margin-left: 12%;
    margin-right: auto;
  }
`;

export const FilterCategory = styled.div`
  width: 180px;
  height: 90px;
  border-radius: 8px;
  margin-top: 70px;
  text-align: center;
  background-color: ${({ theme }) => theme.cards};

  img {
    width: 100px;
    height: 100px;
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
    font-size: 20px;
    margin-left: 5px;
    font-weight: 400;
    cursor: pointer;
    color: ${({ theme }) => theme.fontColor};

    ${media.Tablet} { font-size: 18px; }  

    ${media.MobileM} { font-size: 15px; }  
  
    ${media.MobileS} { font-size: 12px; }  

    &::before {
      content: "";
      border-left: 5px solid #0D5E92;
      padding-right: 8px;
    }
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    background-color: #0D5E92;
    color: ${({ theme }) => theme.fontColor};
    font-size: 20px;
    border-radius: 4px;
    line-height: -200px;
    cursor: pointer;
    font-family: "Lato";

    ${media.Tablet} { font-size: 18px; }  

    ${media.MobileM} { font-size: 15px; }  
  
    ${media.MobileS} { font-size: 12px; }  
  }
`;
