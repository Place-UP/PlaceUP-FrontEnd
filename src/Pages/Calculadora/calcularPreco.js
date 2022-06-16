// import { parse } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { ButtonStyle } from "./style";
export default function Calcular(props) {
  let calculoPorcentagem =
    Number(props.lucro) +
    Number(props.imposto) +
    Number(props.adicionalPorcentagem);

  let Markup = calculoPorcentagem / (100 - calculoPorcentagem) + 1;

  function calc() {
    props.setResultado(
      Markup * (Number(props.preco) + Number(props.adicional))
    );
  }

  return (
    <ButtonStyle>
      <button onClick={calc}> Calcular </button>
    </ButtonStyle>
  );
}
