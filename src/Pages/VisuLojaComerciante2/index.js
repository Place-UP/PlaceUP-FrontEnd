import React from "react";
import { Main } from "./style";
import { HeaderComerciante } from "../../Components/HeaderComerciantes/HeaderComerciante";
import { BarraBusca } from "../../Components/BarraDePesquisaComerciante/index";
import { Box } from "../../Components/VisualizacaoComercianteBox2/index";
import { MenuPrincipal } from "../../Components/NavVisualizacaoComerciante2/index";
import { BtnCreateProdutc } from "../../Components/BtnAdcProduto";

export function VisualizacaoComerciante2() {

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
