import React from "react";
import { InputArea } from "./style";
export default function Unidade(props) {
  return (
    <>
      <InputArea>
        <p>Insira quantas unidades tem esse produto: </p>
        <input
          type="text"
          maxLength="999"
          placeholder="Digite aqui"
          value={props.unidade}
          onChange={(entrada) => {
            props.setUnidade(entrada.target.value.replace(/\D/g, ""));
          }}
        />
      </InputArea>
    </>
  );
}
