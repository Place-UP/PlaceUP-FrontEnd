import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./Components/Login/Index";
import { CadastroUser } from "./Pages/cadastroUsuario";
import { IndexCalculadora } from "./Pages/PageCalculadora/index";
import { IndexHomeUser } from "./Pages/homeUsuario/index";
import { HomeComerciante } from "./Pages/homeComerciante/index.jsx";
import { Pedido } from "./Pages/pedido/index";
import { Pedido2 } from "./Pages/pedido2/index";
import { Pedido3 } from "./Pages/pedido3/index";
import { Pedido4 } from "./Pages/pedido4/index";
import { Pedido5 } from "./Pages/pedido5/index";
import { Pedido6 } from "./Pages/pedido6/index";
import { Reservas } from "./Pages/reservas/index";
import { LadingPage } from "./Pages/LadingPage";
import { Politica } from "./Pages/Politica/index";
import { Dicas } from "./Pages/DicasSeguranca/index";
import { Termos } from "./Pages/Termos/index";
import { FaleConosco } from "./Pages/FaleConosco/index";
import { Pagina404 } from "./Components/Error404";
import { Institucional } from "./Pages/InstitucionalLading/index";
import { CadastroComerciante } from "./Pages/cadastroComerciante/Index";
import { VisualizacaoUsuario } from "./Pages/VisuLojaUsuario/index";
import { VisualizacaoUsuario2 } from "./Pages/VisuLojaUsuario2/index";
import { VisualizacaoUsuario3 } from "./Pages/VisuLojaUsuario3/index";
import { VisualizacaoUsuario4 } from "./Pages/VisuLojaUsuario4/index";
import { VisualizacaoUsuario5 } from "./Pages/VisuLojaUsuario5/index";
import { VisualizacaoUsuario6 } from "./Pages/VisuLojaUsuario6/index";
import { Calculator } from "./Pages/Calculadora/index";
import { CartContextProvider } from "./Common/Context/index";
import { Favoritos } from "./Pages/Favoritos/Index";
import { Perfil } from "./Pages/Perfil/Index";
import { DirecCadastro } from "./Pages/DirecCadastro";
import { Cursos } from "./Pages/Cursos/index";
import { GlobalStyles } from "./Common/Context/theme";
import { CadastroUserPhone } from "./Pages/CadastroUsuerPhone";
import { CadastroPasswordUser } from "./Pages/CadastroPassWordUser";
import { CadastroComerTel } from "./Pages/CadastroComerTel";
import { CadastroComerPassword } from "./Pages/CadastroComerPassword";
import { CadastroComerACD } from "./Pages/CadastroComerACD";
import { ChatComerciante } from "./Pages/Chat/index";
import { AddProduct } from "./Pages/adicionarProduto/index";
import { CreateProductContext } from "./Common/Context/AddProduct";
import { VisualizacaoComerciante } from "./Pages/VisuLojaComerciante/index";
function Rotas() {
  return (
    <>
      <CreateProductContext>
        <CartContextProvider>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LadingPage />} />
              <Route path="/Login" element={<Login />} />
              <Route
                path="/CadastroComerciante"
                element={<CadastroComerciante />}
              />
              <Route path="/CadastroComerTel" element={<CadastroComerTel />} />
              <Route path="/CadastroComerACD" element={<CadastroComerACD />} />
              <Route
                path="/CadastroComerPassword"
                element={<CadastroComerPassword />}
              />

              <Route path="/CadastroUsuario" element={<CadastroUser />} />
              <Route path="/UserPhone" element={<CadastroUserPhone />} />
              <Route path="/UserPassword" element={<CadastroPasswordUser />} />

              <Route path="/FeedUser" element={<IndexHomeUser />} />
              <Route path="/FeedComerciante" element={<HomeComerciante />} />
              <Route path="/Reservas" element={<Reservas />} />
              <Route path="/Pedido" element={<Pedido />} />
              <Route path="/Pedido2" element={<Pedido2 />} />
              <Route path="/Pedido3" element={<Pedido3 />} />
              <Route path="/Pedido4" element={<Pedido4 />} />
              <Route path="/Pedido5" element={<Pedido5 />} />
              <Route path="/Pedido6" element={<Pedido6 />} />
              <Route path="/Politica" element={<Politica />} />
              <Route path="/Dicas" element={<Dicas />} />
              <Route path="/FaleConosco" element={<FaleConosco />} />
              <Route path="/Termos" element={<Termos />} />
              <Route path="/Calculadora" element={<IndexCalculadora />} />
              <Route path="/Institucional" element={<Institucional />} />
              <Route
                path="/VisualizacaoUsuario"
                element={<VisualizacaoUsuario />}
              />
              <Route
                path="/VisualizacaoComerciante"
                element={<VisualizacaoComerciante />}
              />
              <Route
                path="/VisualizacaoUsuario2"
                element={<VisualizacaoUsuario2 />}
              />
              <Route
                path="/VisualizacaoUsuario3"
                element={<VisualizacaoUsuario3 />}
              />

              <Route
                path="/VisualizacaoUsuario4"
                element={<VisualizacaoUsuario4 />}
              />

              <Route
                path="/VisualizacaoUsuario5"
                element={<VisualizacaoUsuario5 />}
              />
              <Route
                path="/VisualizacaoUsuario6"
                element={<VisualizacaoUsuario6 />}
              />
              <Route path="/DirecCadastro" element={<DirecCadastro />} />
              <Route path="/Chat" element={<ChatComerciante />} />
              <Route path="/AddProduct" element={<AddProduct />} />
              <Route path="*" element={<Pagina404 />} />
              <Route path="/calcular" element={<Calculator />} />
              <Route path="/Perfil" element={<Perfil />} />
              <Route path="/Favoritos" element={<Favoritos />} />
              <Route path="/Cursos" element={<Cursos />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </CreateProductContext>
    </>
  );
}

export default Rotas;
