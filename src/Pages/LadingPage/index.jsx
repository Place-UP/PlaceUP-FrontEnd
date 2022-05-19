import React from "react";

import { Btn, HeaderImg, Header, Box } from "./style";

import LogoPlaceUP from '../../Img/ImgLading/PlaceUp animação.svg'

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

      <section>

      </section>
    </>
  );
}
