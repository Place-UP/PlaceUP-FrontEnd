import { Link, useLocation } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { BsChatDots, BsFillGearFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Navigation, Title, List, Icon } from "./styles";
import Logo from "../../Img/PlaceUp animação.svg";

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
            <List className={`${path === "/FeedUser" ? "Active" : ""}`}>
              <Link
                to="/FeedUser"
                className={`${path === "/FeedUser" ? "preto" : ""}`}
              >
                <Icon>
                  <BiHomeAlt />
                </Icon>
                <Title>Home</Title>
              </Link>
            </List>
            <List className={`${path === "/Chat" ? "Active" : ""}`}>
              <Link to="/Chat" className={`${path === "/Chat" ? "preto" : ""}`}>
                <Icon>
                  <BsChatDots />
                </Icon>
                <Title>chat</Title>
              </Link>
            </List>
            <List className={`${path === "/Reservas" ? "Active" : ""}`}>
              <Link to="/Reservas" className={`${path === "/Reservas" ? "preto" : "claro"}`}>
                <Icon>
                  <AiOutlineSchedule />
                </Icon>
                <Title>Reservas</Title>
              </Link>
            </List>
            <List className={`${path === "/Favoritos" ? "Active" : ""}`}>
              <Link to="/Favoritos" className={`${path === "/Favoritos" ? "preto" : "claro"}`}>
                <Icon>
                  <MdFavoriteBorder />
                </Icon>
                <Title>Favoritos</Title>
              </Link>
            </List>
            <List className={`${path === "/Perfil" ? "Active" : ""}`}>
              <Link to="/Perfil" className={`${path === "/Perfil" ? "preto" : "claro"}`}>
                <Icon>
                  <BsFillGearFill />
                </Icon>
<<<<<<< HEAD
                <Title>Configuração</Title>
=======
                <Title>Perfil</Title>
>>>>>>> fb05620744633ed7d9eda350b3351c91a1586ad5
              </Link>
            </List>
          </ul>
        </IconContext.Provider>
      </Navigation>
    </>
  );
}
