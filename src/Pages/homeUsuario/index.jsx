import React from "react";
import { useContext } from 'react'
import { CartContext } from '../../Common/Context'
import { useState } from 'react';
import { box } from '../../mock/boxVisalizer';
import Carrinho from "./images/carrinho.png";
import Bebida from "./images/bebida.png";
import Mercado from "./images/mercado.png";
import Sobremesas from "./images/sobremesa.png";
import Padaria from "./images/padaria.png";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import { FeedUser } from "../../Components/FeedsUser/Feed/index";
import { MenuPrincipal } from "../../Components/MenuPrincipal/index";
import { AiOutlineSearch } from "react-icons/ai"
import { Home, SectionSearch, SearchBar, Car, ContainerSearch, Filter, Category, FilterCategory, InfoCategory } from "./styles";

export function IndexHomeUser() {
  const [query, setQuery] = useState("")

  const search = () => {
    if (!query) return ([])
    return box.filter(
      (item) =>
        item.name.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "").includes(query) ||
        item.price.includes(query)
    )
  }

  return (
    <>
      <Header />
      <Home>
        <MenuPrincipal />

        <Category>
          <SectionSearch>
            <SearchBar>
              <AiOutlineSearch className="icon"/>
              <input type="text" className="search" placeholder="Pesquisa"  onChange={(e) => setQuery(e.target.value)}></input>
            </SearchBar>
            <Car>
              <img src={Carrinho} alt="Carrinho" />
            </Car>
          </SectionSearch>      
          {query &&
            <ContainerSearch>
              {search().map((item) => (
                <div key={item.id} className="VisuBarSearch">                  
                  <img src={item.image} alt="Foto Produto" />                  
                  <span>{item.name}</span>
                  <p>{item.price}</p>
                </div>
              ))}
            </ContainerSearch>
          }

          <Filter>
            <select name="Ordenar por">              
              <option value="ordenar" select>Ordenar</option>
              <option value="maior">Maior Preço</option>
              <option value="menor">Menor Preço</option>
            </select>

            <select name="Acessibilidade">
              <option value="acessibilidade" select>Acessibilidade</option>
              <option value="cego">Suporte para cego</option>
              <option value="surdo">Suporte para surdo</option>
              <option value="mudo">Suporte para mudo</option>
              <option value="cadeirante">Suporte para cadeirante</option>
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