import React from "react";
import logo from "./image/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import { Footergeral , ContainerFooter , Logo , LinksFooter , FooterH1 , Icons , FooterP } from './styles';

export function FooterGeral() {
  return (
    <>
        <Footergeral> 
            <ContainerFooter className="container">
                <div>
                    <Logo src={logo} alt="Logo-PlaceUP" className="logo-img"/>
                </div>

                <LinksFooter className="linksFooter">
                    <div className="links">
                        <a href="">Fale conosco</a>
                        <a href="">Código de conduta</a>
                        <a href="">Dicas de segurança</a>
                    </div>
                    
                    <div className="links">
                        <a href="">Políticas de privacidade</a>
                        <a href="">Termos de condição de uso</a>
                    </div>
                </LinksFooter>

                <div className="Social">
                    <FooterH1 className="SocialH1">SOCIAL</FooterH1>
                    <Icons className="icons"><BsFacebook size='40px' /></Icons>
                    <Icons className="icons"><BsTwitter size='40px' /></Icons>
                    <Icons className="icons"><BsInstagram size='40px' /></Icons>                     
                </div>
            </ContainerFooter>
            <FooterP className="Copyright">© Copyright 2022 - PlaceUP - Todos os direitos reservados PlaceUP.</FooterP>
        </Footergeral>
    </>
  );
}
