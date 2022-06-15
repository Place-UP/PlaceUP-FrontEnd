// import { parse } from "@fortawesome/fontawesome-svg-core";
import React from "react";

export default function Calcular(props) {
    let impostos = ((Number(props.preco) / (Number(props.lucro) + Number(props.imposto))));

    console.log(impostos)

    const calc = () => {
        props.setResultado(impostos + Number(props.preco));
    }

    return (
        <div>
            <button onClick={calc}> calcular </button>
        </div>
    )
}