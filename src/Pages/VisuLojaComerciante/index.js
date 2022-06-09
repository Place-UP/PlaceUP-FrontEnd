import { Link } from "react-router-dom";
import { Main } from "./style";
import { HeaderComerciante } from "../../Components/HeaderComerciantes/HeaderComerciante";
import { BarraBusca } from "../../Components/BarraDePesquisaComerciante/index";
import { Box } from "../../Components/VisualizacaoComercianteBox/index";
import { MenuPrincipal } from "../../Components/NavVisualizacaoComerciante/index";

export function VisualizacaoComerciante() {
  return (
    <>
      <HeaderComerciante />
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
