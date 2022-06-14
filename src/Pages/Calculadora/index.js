import { } from "./style";
import React, { useState } from "react";
import Preco from "./preco";
import Imposto from "./imposto";
import Calcular from "./calcularPreco";

export function Calculator() {
    const [imposto, setImposto] = useState("");
    const [preco, setpreco] = useState("");
    const [result, setResultado] = useState();

    return (
        <>
            <p>
                Campos para inserir:

                Imposto

                Valor pago do produto

                Margem de lucro

                Custos adicionais

                Quantidade de produtos


                Método de cálculo:

                Calcular tudo, e depois fazer a divisão de gastos


                Porcentagem total de intens/ 100% -. Porcentagem total de itens = porcentagem Total de itens / resultado de 100% - porcentagem total de intens
            </p>
            <Imposto imposto={imposto} setImpostos={setImposto} />
            <Preco preco={preco} setprecos={setpreco} />
            <Calcular preco={preco} imposto={imposto} setResultado={setResultado} />
            <p> Resultado = {result}</p>
        </>
    );
}