import React from "react";
import { Main } from "./style";
import { HeaderComerciante } from "../../Components/HeaderComerciantes/HeaderComerciante";
import { BarraBusca } from "../../Components/BarraDePesquisaComerciante/index";
import { Box } from "../../Components/VisualizacaoComercianteBox/index";
import { MenuPrincipal } from "../../Components/NavVisualizacaoComerciante/index.jsx";
import { BtnCreateProdutc } from "../../Components/BtnAdcProduto";

export function VisualizacaoComerciante() {

    return (
        <>
            <HeaderComerciante />
            <Main>
                <div className="feed">
                    <BarraBusca />
                    <Box />
                    <BtnCreateProdutc />
                </div>
                <div className="busca">
                    <MenuPrincipal />
                </div>
            </Main>
        </>
    );
}
