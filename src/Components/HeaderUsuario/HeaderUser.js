import { Link, useLocation } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";
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

            <List className={`${path === "/chat" ? "Active" : ""}`}>
              <Link to="/chat" className={`${path === "/chat" ? "preto" : ""}`}>
                <Icon>
                  <BsChatDots />
                </Icon>
                <Title>chat</Title>
              </Link>
            </List>
            <List className={`${path === "/reservas" ? "Active" : ""}`}>
              <Link to="/reservas" className={`${path === "/reservas" ? "preto" : ""}`}>
                <Icon>
                  <AiOutlineSchedule />
                </Icon>
                <Title>Reservas</Title>
              </Link>
            </List>
            <List className={`${path === "/favoritos" ? "Active" : ""}`}>
            <Link to="/favoritos" className={`${path === "/favoritos" ? "preto" : ""}`}>
                <Icon>
                  <MdFavoriteBorder />
                </Icon>
                <Title>Favoritos</Title>
              </Link>
            </List>
          </ul>
        </IconContext.Provider>
      </Navigation>
    </>
  );
}
