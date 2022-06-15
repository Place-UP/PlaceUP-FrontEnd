import React from "react";
import { Main } from "./style";
import { Header, Body } from "../../Components/HeaderUsuario/HeaderUser";

export function Perfil() {
  return (
    <>
      <Header />
      <Main>
        <Body>
          <div className="Title">
            <p>Favoritos</p>
          </div>
        </Body>
      </Main>
    </>
  );
}
