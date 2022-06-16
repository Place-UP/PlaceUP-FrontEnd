// import { parse } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { ButtonStyle } from "./style";
export default function Calcular(props) {
  let adicional = Number(props.adicionalPorcentagem);
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
    <div className="Button">
      <ButtonStyle>
        <button onClick={calc}>
          <p> Calcular</p>
        </button>
      </ButtonStyle>
    </div>
  );
}
