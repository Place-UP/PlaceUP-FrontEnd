// import { parse } from "@fortawesome/fontawesome-svg-core";
import React from "react";

export default function Calcular(props) {
    let impostos = (Number(props.lucro) + Number(props.imposto));
    let imposto2 = impostos %= (Number(props.preco));
    console.log(imposto2)
    const calc = () => {
        props.setResultado(imposto2 + Number(props.preco));
    }
    return (
        <div>
            <button onClick={calc}> calcular </button>
        </div>
    )
}