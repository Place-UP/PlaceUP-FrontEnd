import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./Components/Login/Index";
import { Header } from "./Components/HeaderUsuario/HeaderUser";
import { FooterGeral } from "./Components/FooterGeral/footer";
import { Pagina404 } from "./Components/Error404";

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Oi</h1>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/HeaderUser" element={<Header />} />
          <Route path="/Footer" element={<FooterGeral />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
