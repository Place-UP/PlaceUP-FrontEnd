import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./Components/Login/Index";
import { Header } from "./Components/HeaderUsuario/HeaderUser";
import { FooterGeral } from "./Components/FooterGeral/footer";

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Oi</h1>} />
          <Route path="/Login" element={<Login />} />
          <Route path="HeaderUser" element={<Header />} />
          <Route path="/Footer" element={<FooterGeral />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
