import React from "react";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import { FeedReservas } from "../../Components/FeedReservas/index";
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

        <FeedReservas />
        <FeedReservas />
        <FeedReservas />
        <FeedReservas />
        <FeedReservas />
      </Home>
    </>
  );
}
