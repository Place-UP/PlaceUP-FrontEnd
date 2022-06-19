import { SearchBar, Container, Main, Carrinho, Filter, BoxCarrinho } from "./style";

import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";

import { box } from "../../mock/boxVisalizer";
import React, { useContext, useState } from "react";
import { CartContext } from "../../Common/Context";
import { BoxCart, Txt } from "./styleCart";

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

  const { carrinho, HandleRemoveCart } = useContext(CartContext)

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
        <BoxCarrinho className={isOpen ? "Active" : "None"}>
          <header>
            <i onClick={() => setIsOpen(false)}><AiOutlineClose /></i>
            <div className="BoxTitle">
              <p>Seu pedido</p>
              <span>Nome do comercio</span>
            </div>
          </header>
          <div>
            {carrinho.map((produto) => {
              const { id, name, price, oldPrice, image, qtd } = produto
              return (
                <BoxCart key={id}>
                  <img src={image} alt="" />
                  <div>
                    <h1>{name}</h1>
                    <p>{price}</p>
                  </div>
                  <Txt>{qtd}</Txt>
                  <button onClick={() => HandleRemoveCart(id)}>Remover</button>
                </BoxCart>
              )
            })}
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
