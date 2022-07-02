import React from "react";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import { FeedPedido2 } from "../../Components/FeedsUser2/FeedPedido/index";
import { MenuPedido2 } from "../../Components/MenuPedido2/index";
import { Home, Category } from "./styles";

export function Pedido2() {
  return (
    <>
      <Header />
      <Home>
        <MenuPedido2 />

        <Category>
          <h1>LISTA DO PEDIDO #0690590</h1>
        </Category>

        <FeedPedido2 />
      </Home>
    </>
  );
}
