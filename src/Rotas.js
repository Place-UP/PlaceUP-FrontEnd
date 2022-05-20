import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./Components/Login/Index";
import { MenuPrincipal } from "./Components/MenuPrincipal/index";
import { FeedUser } from "./Components/Feed/index";
import { CadastroUser } from "./Pages/cadastroUsuario";
import { IndexCalculadora } from "./Pages/PageCalculadora/index";
import { IndexHomeUser } from "./Pages/homeUsuario/index";
import { Pagina404 } from "./Components/Error404";

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Oi</h1>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CadastroUser" element={<CadastroUser />} />
          <Route path="/ComoFuncionaCalculadora" element={<IndexCalculadora />} />
          <Route path="/HomeUser" element={<IndexHomeUser />} />
          <Route path="/MenuPrincipal" element={<MenuPrincipal />} />
          <Route path="/Feed" element={<FeedUser />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
