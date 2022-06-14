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
import { CadastroComerciante } from "./Pages/cadastroComerciante/Index";
import { DirecCadastro } from "./Pages/DirecCadastro";
import { VisualizacaoUsuario } from "./Pages/VisuLojaUsuario/index";
import { VisualizacaoComerciante } from "./Pages/VisuLojaComerciante/index";
import { Calculator } from "./Pages/Calculadora/index";
import { CartContextProvider } from "./Common/Context/index";
import { Favoritos } from "./Pages/Favoritos/Index";
import { Teste } from "./Pages/Favoritos/teste"
import { lightTheme, darkMode } from './Common/Context/theme'
import { ThemeProvider } from 'styled-components';

function Rotas() {
    return (
        <>

            <ThemeProvider theme={darkMode}>
                <CartContextProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<LadingPage />} />
                            <Route path="/Login" element={<Login />} />
                            <Route
                                path="/CadastroComerciante"
                                element={<CadastroComerciante />}
                            />
                            <Route path="/CadastroUsuario" element={<CadastroUser />} />
                            <Route
                                path="/ComoFuncionaCalculadora"
                                element={<IndexCalculadora />}
                            />
                            <Route path="/HomeUser" element={<IndexHomeUser />} />
                            <Route path="/Reservas" element={<Reservas />} />
                            <Route path="/Pedido" element={<Pedido />} />
                            <Route path="/Politica" element={<Politica />} />
                            <Route path="/Dicas" element={<Dicas />} />
                            <Route path="/FaleConosco" element={<FaleConosco />} />
                            <Route path="/Termos" element={<Termos />} />
                            <Route path="/Calculadora" element={<IndexCalculadora />} />
                            <Route path="/Institucional" element={<Institucional />} />
                            <Route path="/DirecCadastro" element={<DirecCadastro />} />
                            <Route
                                path="/VisualizacaoUsuario"
                                element={<VisualizacaoUsuario />}
                            />
                            <Route
                                path="/VisualizacaoComerciante"
                                element={<VisualizacaoComerciante />}
                            />
                            <Route path="*" element={<Pagina404 />} />
                            <Route path="/calcular" element={<Calculator />} />
                            <Route path="/Favoritos" element={<Favoritos />} />
                            <Route path="/Teste" element={<Teste />} />

                        </Routes >

                    </BrowserRouter >
                </CartContextProvider >
            </ThemeProvider>

        </>
    );
}

export default Rotas;