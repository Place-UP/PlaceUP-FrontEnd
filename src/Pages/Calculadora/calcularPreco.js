// // import { parse } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { ButtonStyle } from "./style";
export default function Calcular(props) {
  var adicional = Number(props.adicionalPorcentagem);

  var adicionalReal = !Number(props.adicional);
  var lucro = Number(props.lucro);
  var imposto = Number(props.imposto);
  var calculoPorcentagem = lucro + imposto + adicional;
  var preco = Number(props.preco);
  var Markup = calculoPorcentagem / (100 - calculoPorcentagem) + 1;

  function calc() {
    props.setResultado(Markup * (preco + adicionalReal));
  }

  return (
    <>
      <ButtonStyle onClick={calc}>
        <p> Calcular</p>
      </ButtonStyle>
    </>
  );
}
