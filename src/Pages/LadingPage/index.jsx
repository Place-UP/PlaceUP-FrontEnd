import React from "react";

import {
  Btn, HeaderImg, Header, Box, Container, TitleCard, BtnCard, ParagrafoCard,
  Card, Midia, VetorCidade
} from "./style";

import {
  AiOutlineGoogle, AiOutlineTwitter,
  AiOutlineFacebook, AiOutlineInstagram
} from 'react-icons/ai'

import { Link } from 'react-router-dom'

import LogoPlaceUP from '../../Img/ImgLading/PlaceUp animação.svg'
import CidadeVetor from '../../Img/ImgLading/VetorCidadePlaceUp.svg'

export function LadingPage() {
  return (
    <>
      <Header>
        <HeaderImg>
          <div>
            <img src={LogoPlaceUP} alt="Logo PlaceUP" />
          </div>
        </HeaderImg>
        <Box>
          <Btn primary>Entrar</Btn>
          <Btn>Cadastrar</Btn>
        </Box>
      </Header>

      <Container>
        <Card>
          <TitleCard>O COMÉRCIO <br /> MAIS <span>PRÓXIMO</span> <br /> DE VOCÊ!</TitleCard>

          <ParagrafoCard>Encontre comércios mais próximo da sua região e fique sempre atualizado sem sair de casa!</ParagrafoCard>

          <BtnCard>Saiba Mais</BtnCard>

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
    </>
  );
}
