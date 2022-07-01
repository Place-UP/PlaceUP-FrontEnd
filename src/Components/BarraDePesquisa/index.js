import { SearchBar, Container, Main, Carrinho, Filter, BoxCarrinho } from "./style";

import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";

import { box } from "../../mock/boxVisalizer";
import React, { useContext, useState } from "react";
import { CartContext } from "../../Common/Context";
import { BoxCart, Txt } from "./styleCart";
import { CarrinhoComProduto } from "../Carrinho/CarrinhoComProduto";

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
            <span></span>
          </Carrinho>
        </Container>
        {isOpen ? (
          <CarrinhoComProduto />
        ) : (
          <>

          </>
        )}

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
