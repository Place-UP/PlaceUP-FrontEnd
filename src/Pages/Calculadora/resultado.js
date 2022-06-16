import React from "react";
export default function Resultado(props) {
  return (
    <>
      {/* .toLocaleString('pt-br', {style: 'currency', currency: 'BRL' }) */}
      <span>Valor: {props.resultado}</span>
    </>
  );
}
