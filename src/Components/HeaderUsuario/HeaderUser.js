import { Link, NavLink, useLocation } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { BsChatDots, BsGear } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { IconContext } from "react-icons";
import { Navigation, Title, List, Icon } from "./styles";
import Logo from "./img/PlaceUp_Logo.svg";

export function Header() {
  const path = useLocation().pathname;

  return (
    <>
      <Navigation>
        <div>
          <img src={Logo} alt="Imagem-Logo" />
        </div>

        <IconContext.Provider value={{ size: "30px" }}>
          <ul>
            <List className={`${path === "/" ? "Active" : ""}`}>
              <Link to="/">
                <Icon>
                  <BiHomeAlt />
                </Icon>
                <Title>Home</Title>
              </Link>
            </List>

            <List className={`${path === "/HeaderUser" ? "Active" : ""}`}>
              <Link to="/HeaderUser">
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
