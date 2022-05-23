import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./Components/Login/Index";
import { CadastroUser } from "./Pages/cadastroUsuario";
import { IndexCalculadora } from "./Pages/PageCalculadora/index";
import { IndexHomeUser } from "./Pages/homeUsuario/index";
import { Pedido } from "./Pages/pedido/index";
import { Reservas } from "./Pages/reservas/index";
import { LadingPage } from "./Pages/LadingPage";
import { Pagina404 } from "./Components/Error404";
import { Institucional } from "./Pages/InstitucionalLading/index";

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LadingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CadastroUser" element={<CadastroUser />} />
          <Route
            path="/ComoFuncionaCalculadora"
            element={<IndexCalculadora />}
          />
          <Route path="/HomeUser" element={<IndexHomeUser />} />
          <Route path="/Reservas" element={<Reservas />} />
          <Route path="/Pedido" element={<Pedido />} />
          <Route path="/Calculadora" element={<IndexCalculadora />} />
          <Route path="*" element={<Pagina404 />} />
          <Route path="Institucional" element={<Institucional />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
