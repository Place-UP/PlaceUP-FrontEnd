import React from "react";

export default function Calcular(props) {

    const calc = () => {
        props.setResultado(Number(props.preco) + Number(props.preco) / Number(props.preco));

    }
    return (
        <div>
            <button onClick={calc}> calcular </button>
        </div>
    )


}