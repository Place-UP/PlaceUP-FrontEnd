import React from "react";
import { useState } from 'react';
import { box } from '../../mock/boxVisalizer';
import Bebida from "./images/bebida.png";
import Mercado from "./images/mercado.png";
import Sobremesas from "./images/sobremesa.png";
import Padaria from "./images/padaria.png";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import { FeedUser } from "../../Components/FeedsUser/Feed/index";
import { MenuPrincipal } from "../../Components/MenuPrincipal/index";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"
import * as C from './styles'
import { CarrinhoComProduto } from "../../Components/Carrinho/CarrinhoComProduto";

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

  const [isOpen, setIsOpen] = useState('')

  return (
    <>
      <Header />
      <C.Main>
        <MenuPrincipal />

        <C.Category>
          <C.SectionSearch>
            <C.SearchBar>
              <AiOutlineSearch className="icon" />
              <input type="text" className="search" placeholder="Pesquisa" onChange={(e) => setQuery(e.target.value)}></input>
            </C.SearchBar>

            <C.Car onClick={() => setIsOpen(!isOpen)} className="car">
              <AiOutlineShoppingCart className="carIcon" alt="Carrinho" />
            </C.Car>

          </C.SectionSearch>
          {query &&
            <C.ContainerSearch>
              {search().map((item) => (
                <div key={item.id} className="VisuBarSearch">
                  <img src={item.image} alt="Foto Produto" />
                  <span>{item.name}</span>
                  <p>{item.price}</p>
                </div>
              ))}
            </C.ContainerSearch>
          }

          {isOpen ? (
            <>
              <CarrinhoComProduto />
            </>
          ) : <>

          </>
          }

          <C.Filter>
            <select name="Ordenar por">
              <option value="ordenar" select>Ordenar</option>
              <option value="maior">Maior Preço</option>
              <option value="menor">Menor Preço</option>
            </select>

            <select name="Acessibilidade">
              <option value="acessibilidade" select>Acessibilidade</option>
              <option value="cego">Suporte para Cego</option>
              <option value="surdo">Suporte para Surdo</option>
              <option value="mudo">Suporte para Mudo</option>
              <option value="cadeirante">Suporte para Cadeirante</option>
            </select>
          </C.Filter>

          <h1>CATEGORIAS</h1>
          <div className="containerCategory">
            <C.FilterCategory>
              <img src={Mercado} alt="Icone Shopping" />
              <C.InfoCategory>
                <h2>Mercado</h2>
                <p>&gt;</p>
              </C.InfoCategory>
            </C.FilterCategory>

            <C.FilterCategory>
              <img src={Padaria} alt="Icone Shopping" />
              <C.InfoCategory>
                <h2>Padaria</h2>
                <p>&gt;</p>
              </C.InfoCategory>
            </C.FilterCategory >

            <C.FilterCategory>
              <img src={Sobremesas} alt="Icone Shopping" />
              <C.InfoCategory>
                <h2>Sobremesas</h2>
                <p>&gt;</p>
              </C.InfoCategory>
            </C.FilterCategory>

            <C.FilterCategory>
              <img src={Bebida} alt="Icone Shopping" />
              <C.InfoCategory>
                <h2>Bebida</h2>
                <p>&gt;</p>
              </C.InfoCategory>
            </C.FilterCategory>
          </div>
        </C.Category>

        <FeedUser className="feed" />
        <FeedUser />
        <FeedUser />
        <FeedUser />
        <FeedUser />
      </C.Main>
    </>
  );
}