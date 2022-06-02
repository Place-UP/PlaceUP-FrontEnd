import React, { useState } from "react";

import {
  Btn, HeaderImg, Header, Box, Container, TitleCard, BtnCard, ParagrafoCard,
  Card, Midia, VetorCidade, ContentRight, ContentText, CenarioRightStyle, CenarioLeftStyle,
  Cenarios
} from "./style";

import {
  AiOutlineGoogle, AiOutlineTwitter,
  AiOutlineFacebook, AiOutlineInstagram
} from 'react-icons/ai'

import { Link } from 'react-router-dom'

import LogoPlaceUP from '../../Img/ImgLading/PlaceUp animação.svg'
import CidadeVetor from '../../Img/ImgLading/VetorCidadePlaceUp.svg'
import CursosPlaceUp from '../../Img/ImgLading/Conteudo_Cursos.svg'
import CenarioRight from '../../Img/ImgLading/Cenario_top_right.svg'
import UsuarioCompras from '../../Img/ImgLading/Cenario_(1).svg'
import Calculadora from '../../Img/ImgLading/Calculadora.svg'
import CenarioLeft from '../../Img/ImgLading/Cenario_top_Left.svg'
import Cenario from '../../Img/ImgLading/Cenario.svg'

import { Depoimentos } from "../../Components/ComentariosLading/index";
import { FooterGeral } from "../../Components/FooterGeral/footer";
import { Cards } from "../../Components/CardsLadingPage";

export function LadingPage() {
        //variavel, function
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Header>

        <HeaderImg>
          <div>
            <img src={LogoPlaceUP} alt="Logo PlaceUP" />
          </div>
        </HeaderImg>
        <Box primary className={`nav-item ${isOpen && "open"}`}>
          <Link to="/Login"><Btn primary>Entrar</Btn></Link>
          <Link to="/DirecCadastro"><Btn>Cadastrar</Btn></Link>
        </Box>
        <div className="nav-bar">
          <div className={`Hamburguer ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Header>
      <Container>
        <Card>
          <TitleCard>O COMÉRCIO <br /> MAIS <span>PRÓXIMO</span> <br /> DE VOCÊ!</TitleCard>

          <ParagrafoCard>Encontre comércios mais próximo da sua região e fique sempre atualizado sem sair de casa!</ParagrafoCard>

          <BtnCard primary>Saiba Mais</BtnCard>
          <Cenarios src={Cenario} alt="Parte do cenario" />
          <Midia>

            <Link to="">
              <li>
                <AiOutlineTwitter />
              </li>
            </Link >
            <Link to="">
              <li>
                <AiOutlineInstagram />
              </li>
            </Link >
            <Link to="">
              <li>
                <AiOutlineFacebook />
              </li>
            </Link >
            <Link to="">
              <li>
                <AiOutlineGoogle />
              </li>
            </Link >

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
            <p>Aprenda a impulsionar seu negócio com cursos, uma calculadora para te ajudar a precificar o seu produto e muito mais. </p>
            <BtnCard>Ver mais</BtnCard>
          </ContentText>
        </ContentRight>
      </Container>

      <Container primary>
        <ContentRight>
          <CenarioLeftStyle primary src={CenarioLeft} alt="Enfeite do Site" />
          <ContentText>
            <h1>Calcula com a gente </h1>
            <p>Calcule seus produtos de forma efetiva. </p>
            <BtnCard>Ver mais</BtnCard>
          </ContentText>
        </ContentRight>
        <Box>
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
            <BtnCard>Ver mais</BtnCard>
          </ContentText>
        </ContentRight>
      </Container>
      <Depoimentos />
      <FooterGeral />
    </>
  );
}
