import React from "react";
import Carrinho from "./images/carrinho.png";
import Shopping from "./images/shopping.png";
import Mercado from "./images/mercado.png";
import Farmarcia from "./images/farmarcia.png";
import Restaurantes from "./images/restaurante.png";
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

        <Categoria>
          <HeaderA>
            <Barra>
              <span><AiOutlineSearch size="25px" /></span>
              <input type="text" className="pesquisa" placeholder="Pesquisa"></input>
              <button><IoIosArrowDown className="seta" size="25px" /></button>
            </Barra>
            <Car>
              <img src={Carrinho} alt="Carrinho" />
            </Car>
          </HeaderA>

          <h1 className="aaaaa">CATEGORIAS</h1>
          <div className="containerCategoria">
            <CategoriaShopping>
              <img src={Shopping} alt="Icone Shopping" />
              <InfoCategoria>
                <h2>Shopping</h2>
                <p> &#x2192; </p>
              </InfoCategoria>
            </CategoriaShopping>

            <CategoriaShopping>
              <img src={Mercado} alt="Icone Shopping" />
              <InfoCategoria>
                <h2>Mercado</h2>
                <p> &#x2192; </p>
              </InfoCategoria>
            </CategoriaShopping >

            <CategoriaShopping>
              <img src={Farmarcia} alt="Icone Shopping" />
              <InfoCategoria>
                <h2>Farmárcia</h2>
                <p> &#x2192; </p>
              </InfoCategoria>
            </CategoriaShopping>

            <CategoriaShopping>
              <img src={Restaurantes} alt="Icone Shopping" />
              <InfoCategoria>
                <h2>Restaurantes</h2>
                <p> &#x2192; </p>
              </InfoCategoria>
            </CategoriaShopping>
          </div>
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
