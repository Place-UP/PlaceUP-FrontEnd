import React, { useState } from "react";

import {
  Btn,
  HeaderImg,
  Header,
  Box,
  Container,
  TitleCard,
  BtnCard,
  ParagrafoCard,
  Card,
  Midia,
  VetorCidade,
  ContentRight,
  ContentText,
  CenarioRightStyle,
  CenarioLeftStyle,
  Cenarios, BoxCard
} from "./style";

import {
  AiOutlineGoogle,
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

import { Link } from "react-router-dom";
import LogoPlaceUP from "../../Img/ImgLading/PlaceUp animação.svg";
import CidadeVetor from "../../Img/ImgLading/VetorCidadePlaceUp.svg";
import CursosPlaceUp from "../../Img/ImgLading/Conteudo_Cursos.svg";
import CenarioRight from "../../Img/ImgLading/Cenario_top_right.svg";
import UsuarioCompras from "../../Img/ImgLading/Cenario_(1).svg";
import Calculadora from "../../Img/ImgLading/Calculadora.svg";
import CenarioLeft from "../../Img/ImgLading/Cenario_top_Left.svg";
import Cenario from "../../Img/ImgLading/Cenario.svg";

import { Depoimentos } from "../../Components/ComentariosLading/index";
import { FooterGeral } from "../../Components/FooterGeral/footer";
import { Cards } from "../../Components/CardsLadingPage";

export function LadingPage() {
  //variavel, function
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header>
        <HeaderImg>
          <div>
            <img src={LogoPlaceUP} alt="Logo PlaceUP" />
          </div>
        </HeaderImg>
        <Box primary className={`item ${isOpen && "open"}`}>
          <Link to="/Login">
            <Btn primary>Entrar</Btn>
          </Link>
          <Link to="/DirecCadastro">
            <Btn>Cadastrar</Btn>
          </Link>
        </Box>
        <div className="nav-bar">
          <div
            className={`Hamburguer ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Header>
      <Container>
        <Card>
          <TitleCard>
            O COMÉRCIO <br /> MAIS <span>PRÓXIMO</span> <br /> DE VOCÊ!
          </TitleCard>

          <ParagrafoCard>
            Conheça mais sobre a Place UP a empresa que está sempre com você!
          </ParagrafoCard>

          <BoxCard>
            <Link to="/Institucional">
              <BtnCard primary>Saiba Mais</BtnCard>
            </Link>
          </BoxCard>

          <Cenarios src={Cenario} alt="Parte do cenario" />
          <Midia>
            <a href="https://twitter.com/iPlaceUP">
              <li>
                <AiOutlineTwitter />
              </li>
            </a>
            <a href="https://www.instagram.com/iplaceup/">
              <li>
                <AiOutlineInstagram />
              </li>
            </a>
            <a href="https://www.facebook.com/iplaceup/">
              <li>
                <AiOutlineFacebook />
              </li>
            </a>
          </Midia>
        </Card>

        <VetorCidade>
          <img src={CidadeVetor} alt="Cidade Vetor PlaceUP" />
        </VetorCidade>
      </Container>

      <Cards />

      <Container primary>
        <Box>
          <img src={CursosPlaceUp} alt="Cursos que PlaceUP oferece" />
        </Box>
        <ContentRight>
          <CenarioRightStyle src={CenarioRight} alt="Enfeite do Site" />
          <ContentText>
            <h1>Vem cadastrar seu comércio</h1>
            <p>
              Aprenda a impulsionar seu negócio com cursos, uma calculadora para
              te ajudar a precificar o seu produto e muito mais.{" "}
            </p>
            <Link to="/DirecCadastro"><BtnCard>Ver mais</BtnCard></Link>
          </ContentText>
        </ContentRight>
      </Container>

      <Container primary>
        <ContentRight>
          <CenarioLeftStyle primary src={CenarioLeft} alt="Enfeite do Site" />
          <ContentText>
            <h1>Calcula com a gente </h1>
            <p>Calcule seus produtos de forma efetiva. </p>
            <BtnCard><Link to="/calcular">Ver mais</Link></BtnCard>
          </ContentText>
        </ContentRight>
        <Box primary>
          <img src={Calculadora} alt="Cursos que PlaceUP oferece" />
        </Box>
      </Container>

      <Container primary>
        <Box>
          <img src={UsuarioCompras} alt="Cursos que PlaceUP oferece" />
        </Box>
        <ContentRight>
          <CenarioRightStyle src={CenarioRight} alt="Enfeite do Site" />
          <ContentText>
            <h1>Reserve Seu produto</h1>
            <p>Reserve produtos quando quiser. </p>
            <Link to="/FeedUser"><BtnCard>Ver mais</BtnCard></Link>
          </ContentText>
        </ContentRight>
      </Container>
      <Depoimentos />
      <FooterGeral />
    </>
  );
}
