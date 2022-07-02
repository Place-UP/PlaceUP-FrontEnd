import React from "react";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import { FeedReservas } from "../../Components/FeedsUser/FeedReservas/index";
import { FeedReservas2 } from "../../Components/FeedsUser2/FeedReservas/index";
import { FeedReservas3 } from "../../Components/FeedsUser3/FeedReservas/index";
import { FeedReservas4 } from "../../Components/FeedsUser4/FeedReservas/index";
import { FeedReservas5 } from "../../Components/FeedsUser5/FeedReservas/index";
import { MenuPrincipal } from "../../Components/MenuPrincipal/index";
import { Home, Category } from "./styles";
import { InputDarkMode } from "../../Components/inputDark";

export function Reservas() {
  return (
    <>
      <Header />
      <InputDarkMode />
      <Home>
        <MenuPrincipal />

        <Category>
          <h1>MINHAS RESERVAS</h1>
        </Category>

        <FeedReservas />
        <FeedReservas2 />
        <FeedReservas3 />
        <FeedReservas4 />
        <FeedReservas5 />
      </Home>
    </>
  );
}
