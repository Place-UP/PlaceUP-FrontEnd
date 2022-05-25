import React from "react";
import logo from "./image/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import {
  Footergeral,
  ContainerFooter,
  Logo,
  LinksFooter,
  FooterH1,
  Icons,
  FooterP,
} from "./styles";
import { Link } from "react-router-dom";

export function FooterGeral() {
  return (
    <>
      <Footergeral>
        <ContainerFooter className="container">
          <div>
            <Logo src={logo} alt="Logo-PlaceUP" className="logo-img" />
          </div>

          <LinksFooter className="linksFooter">
            <div className="links">
              <Link to="">Fale conosco</Link>
              <Link to="/Dicas">Dicas de segurança</Link>
            </div>

            <div className="links">
              <Link to="/Politica">Políticas de privacidade</Link>
              <Link to="/Termos">Termos de condição de uso</Link>
            </div>
          </LinksFooter>

          <div className="Social">
            <FooterH1 className="SocialH1">SOCIAL</FooterH1>
            <Icons className="icons">
              <a href="https://www.facebook.com/iplaceup/"><BsFacebook size="40px" /></a>
            </Icons>
            <Icons className="icons">
              <a href="https://twitter.com/iPlaceUP"><BsTwitter size="40px" /></a>
            </Icons>
            <Icons className="icons">
              <a href="https://www.instagram.com/iplaceup/"><BsInstagram size="40px" /></a>
            </Icons>
          </div>
        </ContainerFooter>
        <FooterP className="Copyright">
          © Copyright 2022 - PlaceUP - Todos os direitos reservados PlaceUP.
        </FooterP>
      </Footergeral>
    </>
  );
}
