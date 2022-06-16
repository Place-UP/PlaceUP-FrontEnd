import React from "react";
export default function Resultado(props) {
  return (
    <>
      {/* .toLocaleString('pt-br', {style: 'currency', currency: 'BRL' }) */}
      <span>Valor total : {props.resultado}</span>
      {/* <span>Valor total : {props.resultado}</span> */}
    </>
  );
}
