import React from "react";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import { FeedUser } from "../../Components/Feed/index";
import { MenuPrincipal } from "../../Components/MenuPrincipal/index";
import { Home, Categoria } from "./styles";

export function Reservas() {
  return (
    <>
      <Header />
      <Home>
        <MenuPrincipal />

        <Categoria>
          <h1 className="aaaaa">MINHAS RESERVAS</h1>
        </Categoria>

        <FeedUser />
        <FeedUser />
        <FeedUser />
        <FeedUser />
        <FeedUser />
      </Home>
    </>
  );
}
