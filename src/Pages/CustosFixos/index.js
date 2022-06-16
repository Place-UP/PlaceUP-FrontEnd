import { } from "./style";
import React, { useState } from "react";
import Preco from "./preco";
import Imposto from "./imposto";
import Calcular from "./calcularPreco";
import Lucros from "./margemLucro";

export function Calculator() {
    const [imposto, setImposto] = useState("");
    const [preco, setpreco] = useState("");
    const [result, setResultado] = useState();
    const [lucro, setlucro] = useState();
    return (
        <>
            <p>
                Campos para inserir:

                {/* Imposto */}

                {/* Valor pago do produto */}

                {/* Margem de lucro */}

                Custos adicionais

                Quantidade de produtos


                Método de cálculo:

                Calcular tudo, e depois fazer a divisão de gastos


                Porcentagem total de intens/ 100% -. Porcentagem total de itens = porcentagem Total de itens / resultado de 100% - porcentagem total de intens
            </p>
            <Imposto imposto={imposto} setImpostos={setImposto} />
            <Preco preco={preco} setprecos={setpreco} />
            <Lucros lucro={lucro} setlucros={setlucro} />
            <Calcular lucro={lucro} preco={preco} imposto={imposto} setResultado={setResultado} />
            <p> Resultado = {result}</p>
        </>
    );
}