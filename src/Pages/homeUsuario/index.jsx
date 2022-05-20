import React from "react";
import Carrinho from "./images/carrinho.png";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import { FeedUser } from "../../Components/Feed/index";
import { MenuPrincipal } from "../../Components/MenuPrincipal/index";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai"
import { Home, HeaderA, Barra, Categoria, CategoriaShopping, InfoCategoria, Car } from "./styles";

export function IndexHomeUser() {
  return (
    <>
      <Header />
      <Home>
        <MenuPrincipal />

        <HeaderA>
          <Barra>
            <span><AiOutlineSearch /></span>
            <input type="text" className="pesquisa" placeholder="Pesquisa"></input>
            <IoIosArrowDown className="seta" />
          </Barra>
          <Car>
            <img src={Carrinho} alt="Carrinho" />
          </Car>

        </HeaderA>

        <FeedUser>

        </FeedUser>
        <FeedUser />
        <FeedUser />
        <FeedUser />
        <FeedUser />
      </Home>
    </>
  );
}
