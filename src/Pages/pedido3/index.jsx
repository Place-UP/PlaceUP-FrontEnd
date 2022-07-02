import React from "react";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import { FeedPedido3 } from "../../Components/FeedsUser3/FeedPedido/index";
import { MenuPedido3 } from "../../Components/MenuPedido3/index";
import { Home, Category } from "./styles";

export function Pedido3() {
  return (
    <>
      <Header />
      <Home>
        <MenuPedido3 />

        <Category>
          <h1>LISTA DO PEDIDO #0690590</h1>
        </Category>

        <FeedPedido3 />
      </Home>
    </>
  );
}
