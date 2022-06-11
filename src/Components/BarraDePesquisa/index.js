import { useContext } from 'react'
import { CartContext } from '../../Common/Context'
import { SearchBar, Container, Main, Carrinho } from "./style";

import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

export function BarraBusca() {

  const { carrinho } = useContext(CartContext)
  console.log(carrinho)
  return (
    <>
      <Main>
        <Container>
          <SearchBar>
            <AiOutlineSearch className="icon" />
            <input type="text" className="input" placeholder="Pesquisar" />
          </SearchBar>
          <Carrinho>
            <AiOutlineShoppingCart className="icon" />
            {!!carrinho.length && <span>{carrinho.length}</span>}
          </Carrinho>
        </Container>
      </Main>
    </>
  );
}
