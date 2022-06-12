import { useContext } from 'react'
import { CartContext } from '../../Common/Context'
import { SearchBar, Container, Main, Carrinho, Filter } from "./style";

import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { box } from '../../mock/boxVisalizer';
import { useState } from 'react';


export function BarraBusca() {

  const { carrinho } = useContext(CartContext)

  const [busca, setBusca] = useState(box)

  const newFilter = [...busca]

  const filtragem = newFilter.filter((name) => name.includes(newFilter))

  setBusca(filtragem)



  return (
    <>
      <Main>
        <Container>
          <SearchBar>
            <AiOutlineSearch className="icon" />
            <input type="text"
              className="input"
              placeholder="Pesquisar"
              onChange={setBusca}
            />
          </SearchBar>
          <Carrinho>
            <AiOutlineShoppingCart className="car" />
            {!!carrinho.length && <span>{carrinho.length}</span>}
          </Carrinho>
        </Container>

        <Filter>
          <ul>
            {busca.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </Filter>
      </Main>
    </>
  );
}
