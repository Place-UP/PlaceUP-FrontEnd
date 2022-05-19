import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./Components/Login/Index";
import { CadastroUser } from "./Pages/cadastroUsuario";
import { IndexCalculadora } from "./Pages/PageCalculadora/index";
// import { IndexHomeUser } from "./Pages/PageCalculadora/index";
import { Pagina404 } from "./Components/Error404";

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Oi</h1>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CadastroUser" element={<CadastroUser />} />
          <Route
<<<<<<< HEAD
            path="/Calculadora"
=======
            path="/ComoFuncionaCalculadora"
>>>>>>> 5dd69fa08677147146a90b8866edf6caa9340dcf
            element={<IndexCalculadora />}
          />
          {/* <Route path="/HomeUser" element={<IndexHomeUser />} /> */}
          <Route path="*" element={<Pagina404 />} />
<<<<<<< HEAD

=======
>>>>>>> 5dd69fa08677147146a90b8866edf6caa9340dcf
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
