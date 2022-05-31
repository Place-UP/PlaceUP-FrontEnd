import React from "react";
import Carrinho from "./images/carrinho.png";
import Bebida from "./images/bebida.png";
import Mercado from "./images/mercado.png";
import Sobremesas from "./images/sobremesa.png";
import Padaria from "./images/padaria.png";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import { FeedUser } from "../../Components/FeedsUser/Feed/index";
import { MenuPrincipal } from "../../Components/MenuPrincipal/index";
import { AiOutlineSearch } from "react-icons/ai"
import { Home, HeaderA, Barra, Filtro, Categoria, CategoriaShopping, InfoCategoria, Car } from "./styles";

export function IndexHomeUser() {
  return (
    <>
      <Header />
      <Home>
        <MenuPrincipal />

        <Categoria>
          <HeaderA>
            <Barra>
              <span><AiOutlineSearch /></span>
              <input type="text" className="pesquisa" placeholder="Pesquisa"></input>
            </Barra>
            <Car>
              <img src={Carrinho} alt="Carrinho" />
            </Car>
          </HeaderA>

          <Filtro>
            <select name="Ordenar por">              
              <option value="ordenar" select>Ordenar</option>
              <option value="maior">Maior Preço</option>
              <option value="menor">Menor Preço</option>
            </select>

            <select name="Acessibilidade">
              <option value="acessibilidade" select>Acessibilidade</option>
              <option value="cego">Acessível para cego</option>
              <option value="surdo">Acessível para surdo</option>
              <option value="mudo">Acessível para mudo</option>
              <option value="cadeirante">Acessível para cadeirante</option>
            </select>
          </Filtro>
          
          <h1 className="aaaaa">CATEGORIAS</h1>
          <div className="containerCategoria">
            <CategoriaShopping>
              <img src={Mercado} alt="Icone Shopping" />
              <InfoCategoria>
                <h2>Mercado</h2>
                <p> &#x2192; </p>
              </InfoCategoria>
            </CategoriaShopping>

            <CategoriaShopping>
              <img src={Padaria} alt="Icone Shopping" />
              <InfoCategoria>
                <h2>Padaria</h2>
                <p> &#x2192; </p>
              </InfoCategoria>
            </CategoriaShopping >

            <CategoriaShopping>
              <img src={Sobremesas} alt="Icone Shopping" />
              <InfoCategoria>
                <h2>Sobremesas</h2>
                <p> &#x2192; </p>
              </InfoCategoria>
            </CategoriaShopping>

            <CategoriaShopping>
              <img src={Bebida} alt="Icone Shopping" />
              <InfoCategoria>
                <h2>Bebida</h2>
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