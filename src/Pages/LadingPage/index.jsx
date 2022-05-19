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
        <div>
          <h1>O COMÉRCIO MAIS <span>PRÓXIMO</span> DE VOCÊ!</h1>

          <p>Encontre comércios mais próximo da sua região e fique sempre atualizado sem sair de casa!</p>

          <button>Saiba Mais</button>
        </div>
      </section>
    </>
  );
}
