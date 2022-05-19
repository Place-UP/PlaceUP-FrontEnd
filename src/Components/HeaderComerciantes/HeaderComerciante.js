import { Link, useLocation } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { BsChatDots, BsGraphUp, BsGear } from "react-icons/bs";
import { TiCalculator } from "react-icons/ti";
import { BiExit } from "react-icons/bi";
import { IconContext } from "react-icons";
import { Navigation, Title, List, Icon } from "./styles";
import Logo from "../../Img/logo_header.svg";

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
            <List className={`${path === "/" ? "Active" : ""}`}>
              <Link to="/">
                <Icon>
                  <BiHomeAlt />
                </Icon>
                <Title>Home</Title>
              </Link>
            </List>

            <List className={`${path === "/" ? "Active" : ""}`}>
              <Link to="/">
                <Icon>
                  <BsChatDots />
                </Icon>
                <Title>chat</Title>
              </Link>
            </List>
            <List>
              <Link to="">
                <Icon>
                  <BsGraphUp />
                </Icon>
                <Title>Gráficos</Title> 
              </Link>
            </List>
            <List>
              <Link to="">
                <Icon>
                  <TiCalculator />
                </Icon>
                <Title>Calculadora</Title>
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
