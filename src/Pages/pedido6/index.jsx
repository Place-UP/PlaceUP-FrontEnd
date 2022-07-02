import React from "react";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import { FeedPedido6 } from "../../Components/FeedsUser6/FeedPedido/index";
import { MenuPedido6 } from "../../Components/MenuPedido6/index";
import { Home, Category } from "./styles";

export function Pedido6() {
  return (
    <>
      <Header />
      <Home>
        <MenuPedido6 />

        <Category>
          <h1>LISTA DO PEDIDO #0690590</h1>
        </Category>

        <FeedPedido6 />
      </Home>
    </>
  );
}
