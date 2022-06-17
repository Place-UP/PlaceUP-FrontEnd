import React from "react";
import { InputArea } from "./style";
export default function AdicionalPorcentagem(props) {
  return (
    <>
      <InputArea>
        <p>Gostaria de Adicionar algum valor adicional? </p>
        <input
          type="number"
          placeholder="Digite aqui %"
          value={props.adicionalPorcentagem}
          onChange={(entrada) => {
            props.setadicionalPorcentagem(entrada.target.value);
          }}
        />
      </InputArea>
    </>
  );
}
