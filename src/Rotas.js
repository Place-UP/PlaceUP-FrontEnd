import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./Components/Login/Index";
import { CadastroUser } from "./Pages/cadastroUsuario";
import { IndexCalculadora } from "./Pages/PageCalculadora/index";
import { IndexHomeUser } from "./Pages/homeUsuario/index";
import { Pedido } from "./Pages/pedido/index";
import { Reservas } from "./Pages/reservas/index";
import { LadingPage } from "./Pages/LadingPage";
import { Politica } from "./Pages/Politica/index";
import { Dicas } from "./Pages/DicasSeguranca/index";
import { Termos } from "./Pages/Termos/index";
import { FaleConosco } from "./Pages/FaleConosco/index";
import { Pagina404 } from "./Components/Error404";
import { Institucional } from "./Pages/InstitucionalLading/index";
import { CadastroComerciante } from "./Pages/cadastroComerciante/Index"

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LadingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CadastroComerciante" element={<CadastroComerciante />} />
          <Route path="/CadastroUsuario" element={<CadastroUser />} />
          <Route path="/ComoFuncionaCalculadora" element={<IndexCalculadora />} />
          <Route path="/HomeUser" element={<IndexHomeUser />} />
          <Route path="/Reservas" element={<Reservas />} />
          <Route path="/Pedido" element={<Pedido />} />
          <Route path="/Politica" element={<Politica />} />
          <Route path="/Dicas" element={<Dicas />} />
          <Route path="/FaleConosco" element={<FaleConosco />} />
          <Route path="/Termos" element={<Termos />} />
          <Route path="/Calculadora" element={<IndexCalculadora />} />
          <Route path="*" element={<Pagina404 />} />
          <Route path="/Institucional" element={<Institucional />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
