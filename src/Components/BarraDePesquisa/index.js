import { SearchBar, Container, Main } from "./style";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
export function BarraBusca() {
  return (
    <>
      <Main>
        <Container>
          <SearchBar>
            <AiOutlineSearch className="icon" />
            <input type="text" className="input" placeholder="Pesquisar" />
          </SearchBar>
          <AiOutlineShoppingCart className="icon" />
        </Container>
      </Main>
    </>
  );
}
