import { Main } from "./style";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import { BarraBusca } from "../../Components/BarraDePesquisa/index";
import { Box } from "../../Components/VisualizacaoUsuarioBox3/index";
import { MenuPrincipal } from "../../Components/NavVisualizacaoUsuario3/index";

export function VisualizacaoUsuario3() {
    return (
        <>
            <Header />
            <Main>
                <div className="Container1">
                    <BarraBusca />
                    <Box />
                </div>
                <div className="Container2">
                    <MenuPrincipal />
                </div>
            </Main>
        </>
    );
}
