import React from "react";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import { FeedPedido4 } from "../../Components/FeedsUser4/FeedPedido/index";
import { MenuPedido } from "../../Components/MenuPedido/index";
import { Home, Category } from "./styles";

export function Pedido4() {
  return (
    <>
      <Header />
      <Home>
        <MenuPedido />

        <Category>
          <h1>LISTA DO PEDIDO #0690590</h1>
        </Category>

        <FeedPedido4 />
      </Home>
    </>
  );
}
