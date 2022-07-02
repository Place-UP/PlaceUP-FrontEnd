import { Link, useLocation } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";
import { TiCalculator } from "react-icons/ti";
import { BiExit } from "react-icons/bi";
import { FiBox } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

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
              <List
                className={`${path === "/FeedComerciante" ? "Active" : ""}`}
              >
                <Link
                  to="/FeedComerciante"
                  className={`${path === "/FeedComerciante" ? "preto" : ""}`}
                >
                  <Icon>
                    <BiHomeAlt className="IconsHeader" />
                  </Icon>
                  <Title>Home</Title>
                </Link>
              </List>

              <List className={`${path === "/Chat" ? "Active" : ""}`}>
                <Link
                  to="/Chat"
                  className={`${path === "/Chat" ? "preto" : ""}`}
                >
                  <Icon>
                    <BsChatDots className="IconsHeader" />
                  </Icon>
                  <Title>Chat</Title>
                </Link>
              </List>

              <List
                className={`${
                  path === "/VisualizacaoComerciante" ? "Active" : ""
                }`}
              >
                <Link
                  to="/VisualizacaoComerciante"
                  className={`${
                    path === "/VisualizacaoComerciante" ? "preto" : ""
                  }`}
                >
                  <Icon>
                    <FiBox className="IconsHeader" />
                  </Icon>
                  <Title>Loja</Title>
                </Link>
              </List>

              <List className={`${path === "/cursos" ? "Active" : ""}`}>
                <Link
                  to="/cursos"
                  className={`${path === "/cursos" ? "preto" : ""}`}
                >
                  <Icon>
                    <FaGraduationCap className="IconsHeader" />
                  </Icon>
                  <Title>Cursos</Title>
                </Link>
              </List>

              <List
                className={`${
                  path === "/calcular" || path === "/calculadora"
                    ? "Active"
                    : ""
                }`}
              >
                <Link
                  to="/calcular"
                  className={`${
                    path === "/calcular" || path === "/calculadora"
                      ? "preto"
                      : ""
                  }`}
                >
                  <Icon>
                    <TiCalculator className="IconsHeader" />
                  </Icon>
                  <Title>Calculadora</Title>
                </Link>
              </List>
            </div>
            <div className="boxExist">
              <List>
                <Link to="/" className={`${path === "/" ? "preto" : ""}`}>
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
