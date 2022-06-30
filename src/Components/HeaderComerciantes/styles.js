import styled from "styled-components";

export const Icon = styled.span``;

export const Title = styled.span``;

export const List = styled.li`

`;

const Media = {
  MobileL: "@media(max-width:550px)",
};
export const Navigation = styled.div`
  position: fixed;
  width: 70px;
  height: 95vh;
  background-color: ${({ theme }) => theme.bar};
  margin: auto;
  overflow-x: hidden;
  transition: width 0.5s;
  padding-top: 50px;
  border-radius: 0 14px 14px 0;
  z-index: 20;


  ${Media.MobileL} {
    width: 60px;
    font-size: 10px;
  }
  &:hover {
    width: 220px;
    ${Media.MobileL} {
      width: 170px;
    }
  }

  div{
    img{
      padding: 10px;
      margin-bottom: 40px;
      width: 50px;
    }
  }

  ul {
    width: 100%;
    padding-left: 5px;
    padding-right: 40px;

    ${Media.MobileL} {
      padding-left: 0;
      padding-right: 0;
    }
  }
  li {
    position: relative;
    width: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  a {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    color: white;
  }

  ${Icon} {
    position: relative;
    display: block;
    min-width: 60px;
    text-align: center;
    align-items: center;
    z-index: 1;
  }

  ${Title} {
    position: relative;
    display: block;
    padding-left: 10px;
    height: 60px;
    line-height: 60px;
    white-space: nowrap;
    font-family: lato;
    font-size: 1.5rem;
    align-items: center;


    ${Media.MobileL} {
      font-size: 1rem;
    }
  }
  .IconsHeader {
    ${Media.MobileL} {
      width: 20px;
    }
  }

  .Active {
    background: ${({ theme }) => theme.body};
    &::after {
      content: "";
      position: absolute;
      top: -30px;
      right: 0;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      box-shadow: 15px 15px 0 ${({ theme }) => theme.body};
    }
    &::before {
      content: "";
      position: absolute;
      bottom: -30px;
      right: 0;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      box-shadow: 15px -15px 0 ${({ theme }) => theme.body};
    }
    .preto {
      color: ${({ theme }) => theme.fontColor};
    }
  }

  img {
    display: block;
    max-width: 100px;
    max-height: 100px;
    margin: 0 auto;
  }

`;
