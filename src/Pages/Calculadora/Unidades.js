import React from "react";
import { InputArea } from "./style";
export default function Unidade(props) {
  return (
    <>
      <InputArea>
        <p>Insira quantas unidades tem esse produto: </p>
        <input
          type="number"
          placeholder="Digite aqui "
          value={props.unidade}
          onChange={(entrada) => {
            props.setUnidade(entrada.target.value);
          }}
        />
      </InputArea>
    </>
  );
}
