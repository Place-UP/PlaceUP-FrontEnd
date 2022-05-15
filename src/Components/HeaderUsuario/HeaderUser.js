import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { BsChatDots, BsGear } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import Logo from "./img/PlaceUp_Logo.svg";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { List } from "../Login/style";
export function Header() {
  const Icon = styled.span``;

  const Title = styled.span``;

  const List = styled.li``;

  const Navigation = styled.div`
    position: fixed;
    width: 70px;
    height: 93vh;
    background-color: #2980b9;
    box-shadow: 10px 0 0 #fff;
    margin: auto;
    overflow-x: hidden;
    transition: width 0.5s;
    padding-top: 50px;
    border-radius: 14px;
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
  const listar = document.querySelectorAll(List);
  function ActiveLink() {
    listar.forEach((item) => item.classListar.remove("active"));
    listar.forEach((item) => item.classListar.add("active"));
  }
  listar.forEach((item) => item.addEventListener("click", ActiveLink));
  return (
    <>
      <Navigation>
        <div>
          <img src={Logo} />
        </div>

        <IconContext.Provider value={{ size: "30px" }}>
          <ul>
            <List>
              <Link to="">
                <Icon color={"black"}>
                  <BiHomeAlt />
                </Icon>
                <Title color={"black"}>Home</Title>
              </Link>
            </List>

            <List>
              <Link to="">
                <Icon>
                  <BsChatDots />
                </Icon>
                <Title>chat</Title>
              </Link>
            </List>
            <List className="Active ">
              <Link to="">
                <Icon>
                  <AiOutlineSchedule />
                </Icon>
                <Title>Reservas</Title>
              </Link>
            </List>
            <List>
              <Link to="">
                <Icon>
                  <MdFavoriteBorder />
                </Icon>
                <Title>Favoritos</Title>
              </Link>
            </List>
            <List>
              <Link to="">
                <Icon>
                  <BsGear />
                </Icon>
                <Title>Configurações</Title>
              </Link>
            </List>
            <List>
              <Link to="">
                <Icon>
                  <BiExit />
                </Icon>
                <Title>Sair</Title>
              </Link>
            </List>
          </ul>
        </IconContext.Provider>
      </Navigation>
    </>
  );
}
