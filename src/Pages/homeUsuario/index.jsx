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
import { Home, SectionSearch, SearchBar, Filter, Category, FilterCategory, InfoCategory, Car } from "./styles";

export function IndexHomeUser() {
  return (
    <>
      <Header />
      <Home>
        <MenuPrincipal />

        <Category>
          <SectionSearch>
            <SearchBar>
              <span><AiOutlineSearch /></span>
              <input type="text" className="search" placeholder="Pesquisa"></input>
            </SearchBar>
            <Car>
              <img src={Carrinho} alt="Carrinho" />
            </Car>
          </SectionSearch>

          <Filter>
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
          </Filter>
          
          <h1>CATEGORIAS</h1>
          <div className="containerCategory">
            <FilterCategory>
              <img src={Mercado} alt="Icone Shopping" />
              <InfoCategory>
                <h2>Mercado</h2>
                <p> &#x2192; </p>
              </InfoCategory>
            </FilterCategory>

            <FilterCategory>
              <img src={Padaria} alt="Icone Shopping" />
              <InfoCategory>
                <h2>Padaria</h2>
                <p> &#x2192; </p>
              </InfoCategory>
            </FilterCategory >

            <FilterCategory>
              <img src={Sobremesas} alt="Icone Shopping" />
              <InfoCategory>
                <h2>Sobremesas</h2>
                <p> &#x2192; </p>
              </InfoCategory>
            </FilterCategory>

            <FilterCategory>
              <img src={Bebida} alt="Icone Shopping" />
              <InfoCategory>
                <h2>Bebida</h2>
                <p> &#x2192; </p>
              </InfoCategory>
            </FilterCategory>
          </div>
        </Category>

        <FeedUser />
        <FeedUser />
        <FeedUser />
        <FeedUser />
        <FeedUser />
      </Home>
    </>
  );
}