import { useContext } from 'react'
import { CartContext } from '../../Common/Context'
import { SearchBar, Container, Main, Carrinho, Filter } from "./style";

import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { box } from '../../mock/boxVisalizer';
import { useState } from 'react';


export function BarraBusca() {

  const { carrinho } = useContext(CartContext)

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
      <Main>
        <Container>
          <SearchBar>
            <AiOutlineSearch className="icon" />
            <input type="text"
              className="input"
              placeholder="Pesquisar"
              onChange={(e) => setQuery(e.target.value)}
            />
          </SearchBar>
          <Carrinho>
            <AiOutlineShoppingCart className="car" />
            {!!carrinho.length && <span>{carrinho.length}</span>}
          </Carrinho>
        </Container>
        {query &&
          <Filter>
            {search().map((item) => (
              <div key={item.id}>
                <p>{item.price}</p>
                <span>{item.name}</span>
                <img src={item.image} />
              </div>
            ))}
          </Filter>
        }
      </Main>
    </>
  );
}
