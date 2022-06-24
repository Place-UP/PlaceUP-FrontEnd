import { SearchBar, Container, Main, Notification } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io"

export function BarraBusca() {
  return (
    <>
      <Main>
        <Container>
          <SearchBar>
            <AiOutlineSearch className="icon" />
            <input type="text" className="input" placeholder="Pesquisar" />
          </SearchBar>
          <Notification>
            <span><IoMdNotificationsOutline /></span>
          </Notification>
        </Container>
      </Main>
    </>
  );
}
