import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { BsChatDots, BsGear } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import Logo from "./img/PlaceUp_Logo.svg";
import styled from "styled-components";
import { IconContext } from "react-icons";
export function Header() {
  const Icon = styled.span``;

  const Title = styled.span``;

  const List = styled.li`
  
    }
  `;

  const Navigation = styled.div`
    position: fixed;
    width: 250px;
    height: 100vh;
    background-color: #2980b9;
    margin: auto;

    ul {
      position: absolute;
      top: 0px;
      left: 0px;
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
      display: block;
      width: 100%;
      display: flex;
      color: #fff;
    }

    ${Icon} {
      position: relative;
      display: block;
      min-width: 60px;
      min-height: 60px;
      line-height: 70px;
      text-align: center;
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
    }
  `;

  return (
    <>
      <Navigation>
        <div></div>

        <IconContext.Provider value={{ size: "30px", position: "relative" }}>
          <ul>
            <List background={"#fff"}>
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
            <List>
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
