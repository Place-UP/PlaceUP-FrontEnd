import React from "react";
import Carrinho from "./images/carrinho.png";
import Shopping from "./images/shopping.png";
import Mercado from "./images/mercado.png";
import Farmarcia from "./images/farmarcia.png";
import Restaurante from "./images/restaurantes.png";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import { FeedUser } from "../../Components/Feed/index";
import { MenuPrincipal } from "../../Components/MenuPrincipal/index";
import { IoIosArrowDown } from "react-icons/io";
import { Home, HeaderA, Barra, Categoria, CategoriaShopping, InfoCategoria } from "./styles";

export function IndexHomeUser() {
  return (
    <>
    <Home>
      <Header />
      <MenuPrincipal  />

      <HeaderA>
        <Barra>
          <input type="text" className="pesquisa" placeholder="Pesquisa"></input>
          <IoIosArrowDown className="seta"/>
        </Barra>

        <img src={Carrinho} alt="Carrinho"/>
      </HeaderA>

      <Categoria>
        <h1>CATEGORIAS</h1>
        <div className="containerCategoria">
          <CategoriaShopping className="Toma"> 
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
          </CategoriaShopping>

          <CategoriaShopping>
            <img src={Farmarcia} alt="Icone Shopping" />
            <InfoCategoria>
              <h2>Farmárcia</h2>
              <p> &#x2192; </p>
            </InfoCategoria>
          </CategoriaShopping>

          <CategoriaShopping>
            <img src={Restaurante} alt="Icone Shopping" />
            <InfoCategoria>
              <h2>Restaurante</h2>
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
