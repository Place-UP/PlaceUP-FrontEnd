import { SearchBar, Container, Main, Carrinho, Filter, BoxCarrinho, BoxTitle } from "./style";

import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

import { AiOutlineClose } from 'react-icons/ai';
import { box } from "../../mock/boxVisalizer";
import React, { useState } from "react";

export function BarraBusca() {

  const [query, setQuery] = useState("");

  const search = () => {
    if (!query) return [];
    return box.filter(
      (item) =>
        item.name.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "").includes(query) ||
        item.price.includes(query)
    );
  };

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Main>
        <Container>
          <SearchBar>
            <AiOutlineSearch className="icon" />
            <input
              type="text"
              className="input"
              placeholder="Pesquisar"
              onChange={(e) => setQuery(e.target.value)}
            />
          </SearchBar>
          <Carrinho>
            <AiOutlineShoppingCart className="car" onClick={() => setIsOpen(!isOpen)} />
          </Carrinho>
        </Container>
        <BoxCarrinho className={isOpen ? "Active" : "None"}>
          <header>
            <i onClick={() => setIsOpen(false)}><AiOutlineClose /></i>
            <div className="BoxTitle">
              <p>Seu pedido</p>
              <span>Nome do comercio</span>
            </div>
          </header>
          <div>

          </div>
        </BoxCarrinho>
        {query && (
          <Filter>
            {search().map((item) => (
              <div key={item.id} className="VisuBarSearch">
                <img src={item.image} alt="Foto Produto" />
                <span>{item.name}</span>
                <p>{item.price}</p>
              </div>
            ))}
          </Filter>
        )}
      </Main>
    </>
  );
}
