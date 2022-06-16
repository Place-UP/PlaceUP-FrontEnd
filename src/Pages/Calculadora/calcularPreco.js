// import { parse } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { ButtonStyle } from "./style";
export default function Calcular(props) {
    let calculoPorcentagem = (Number(props.lucro) + Number(props.imposto));
    let Markup = (calculoPorcentagem / (100 - calculoPorcentagem) + 1);

    function calc() {
        props.setResultado(Markup * Number(props.preco));
    }

    return (
        <ButtonStyle>
            <button onClick={calc}> Calcular </button>
        </ButtonStyle>
    )
}