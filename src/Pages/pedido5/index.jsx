import React from "react";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import { FeedPedido5 } from "../../Components/FeedsUser5/FeedPedido/index";
import { MenuPedido } from "../../Components/MenuPedido/index";
import { Home, Category } from "./styles";

export function Pedido5() {
  return (
    <>
      <Header />
      <Home>
        <MenuPedido />

        <Category>
          <h1>LISTA DO PEDIDO #0690590</h1>
        </Category>

        <FeedPedido5 />
      </Home>
    </>
  );
}
