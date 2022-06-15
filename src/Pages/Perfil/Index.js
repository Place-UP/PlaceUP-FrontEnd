import React from "react";
import { Main } from "./style";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import { Bodys } from './style'
export function Perfil() {
  return (
    <>
      <Header />
      <Main>
        <Bodys>
          <div className="Title">
            <p>Favoritos</p>
          </div>
        </Bodys>
      </Main>
    </>
  );
}
