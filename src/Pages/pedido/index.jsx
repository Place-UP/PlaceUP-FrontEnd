import React from "react";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import { FeedPedido } from "../../Components/FeedsUser/FeedPedido/index";
import { MenuPedido } from "../../Components/MenuPedido/index";
import { Home, Categoria } from "./styles";

export function Pedido() {
  return (
    <>
      <Header />
      <Home>
        <MenuPedido />

        <Categoria>
          <h1 className="aaaaa">LISTA DO PEDIDO #0690590</h1>
        </Categoria>

        <FeedPedido />
      </Home>
    </>
  );
}
