// // import { parse } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { ButtonStyle } from "./style";

export default function Calcular(props) {
  //Entrada de ddados
  var adicionalReal = Number(props.adicional);
  var imposto = Number(props.imposto);
  var lucro = Number(props.lucro);
  var porcentagemAdicional = Number(props.adicionalPorcentagem);
  var preco = Number(props.preco);

  //Caclulo porcentagem
  var calculoPorcentagem =
    Number(imposto) + Number(lucro) + Number(porcentagemAdicional);

  //Calculo Preco com o adiconalReal
  var TotalPreco = preco + adicionalReal;

  //Calculo Markup
  var Markup = calculoPorcentagem / (100 - calculoPorcentagem);
  Markup = Markup < 0 ? 1 - TotalPreco / calculoPorcentagem : Markup;

  console.log(Markup);
  function calc() {
    props.setResultado(Markup * TotalPreco + TotalPreco);
    if (calculoPorcentagem >= 87) {
      props.setResultado("A porcentagem inserida é inválida");
    }
  }

  return (
    <>
      <ButtonStyle onClick={calc}>
        <p> Calcular</p>
      </ButtonStyle>
    </>
  );
}
