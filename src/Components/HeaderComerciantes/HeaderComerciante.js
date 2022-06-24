import { Link, useLocation } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";
import { TiCalculator } from "react-icons/ti";
import { BiExit } from "react-icons/bi";
import { FiBox } from 'react-icons/fi'
import { IconContext } from "react-icons";
import { Navigation, Title, List, Icon } from "./styles";
import Logo from "../../Img/PlaceUp animação.svg";


export function HeaderComerciante() {
  const path = useLocation().pathname;

  return (
    <>
      <Navigation>
        <div>
          <img src={Logo} alt="Imagem-Logo" />
        </div>

        <IconContext.Provider value={{ size: "30px" }}>
          <ul>
            <div>
              <List className={`${path === "/FeedUser" ? "Active" : ""}`}>
                <Link
                  to="/FeedUser"
                  className={`${path === "/FeedUser" ? "preto" : ""}`}>
                  <Icon>
                    <BiHomeAlt className="IconsHeader" />
                  </Icon>
                  <Title>Home</Title>
                </Link>
              </List>

              <List className={`${path === "/Chat" ? "Active" : ""}`}>
                <Link to="/Chat" className={`${path === "/Chat" ? "preto" : ""}`}>
                  <Icon>
                    <BsChatDots className="IconsHeader" />
                  </Icon>
                  <Title>Chat</Title>
                </Link>
              </List>

              <List className={`${path === "/VisualizacaoComerciante" ? "Active" : ""}`}>
                <Link to="/VisualizacaoComerciante" className={`${path === "/VisualizacaoComerciante" ? "preto" : ""}`}>
                  <Icon>
                    <FiBox className="IconsHeader" />
                  </Icon>
                  <Title>Reservas</Title>
                </Link>
              </List>

              <List className={`${path === "/calcular" ? "Active" : ""}`}>
                <Link to="/calcular" className={`${path === "/calcular" ? "preto" : ""}`}>
                  <Icon>
                    <TiCalculator className="IconsHeader" />
                  </Icon>
                  <Title>Calculadora</Title>
                </Link>
              </List>
            </div>
            <div>
              <List>
                <Link to="" className={`${path === "/" ? "preto" : ""}`}>
                  <Icon>
                    <BiExit className="IconsHeader" />
                  </Icon>
                  <Title>Sair</Title>
                </Link>
              </List>
            </div>
          </ul>
        </IconContext.Provider>
      </Navigation>
    </>
  );
}
