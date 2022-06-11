import { SearchBar, Container, Main } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
export function BarraBusca() {
  return (
    <>
      <Main>
        <Container>
          <SearchBar>
            <AiOutlineSearch className="icon" />
            <input type="text" className="input" placeholder="Pesquisar" />
          </SearchBar>
        </Container>
      </Main>
    </>
  );
}
