import { } from "./style";
import React, { useState } from "react";
import Preco from "./preco";
import Imposto from "./imposto";
import Calcular from "./calcularPreco";

export function Calculator() {
    const [imposto, setImposto] = useState("");
    const [preco, setpreco] = useState("");
    const [result, setResultado] = useState("");

    return (
        <>
            <Imposto imposto={imposto} setImpostos={setImposto} />
            <Preco preco={preco} setprecos={setpreco} />
            <Calcular preco={preco} imposto={imposto} setResultado={setResultado} />
            <p> Resultado = {result}</p>
        </>
    );
}