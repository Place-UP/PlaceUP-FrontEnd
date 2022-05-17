import styled from "styled-components";

export const Icon = styled.span``;

export const Title = styled.span``;

export const List = styled.li``;
export const Navigation = styled.div`
  position: fixed;
  width: 70px;
  height: 95vh;
  background-color: #2980b9;
  margin: auto;
  overflow-x: hidden;

  transition: width 0.5s;
  padding-top: 50px;
  border-radius: 0 14px;

  &:hover {
    width: 250px;
  }
  ul {
    width: 100%;
    padding-left: 5px;
    padding-right: 40px;
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
    color: black;
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
  }

  .Active {
    background: #ffffff;
    &::after {
      content: "";
      position: absolute;
      top: -30px;
      right: 0;
      width: 30px;
      height: 30px;
      background-color: #2980b9;
      border-radius: 50%;
      box-shadow: 15px 15px 0 #ffff;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: -30px;
      right: 0;
      width: 30px;
      height: 30px;
      background-color: #2980b9;
      border-radius: 50%;
      box-shadow: 15px -15px 0 #ffff;
    }
  }

  img {
    display: block;
    max-width: 100px;
    max-height: 100px;
    margin: 0 auto;
  }
`;
