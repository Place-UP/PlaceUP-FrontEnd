import React from "react";
import { InputArea } from "./style";
export default function Imposto(props) {
  return (
    <>
      <InputArea>
        <p>Imposto pago mensalmente/anualmente: *</p>
        <input
          type="text"
          maxLength="10"
          placeholder="Digite aqui %"
          value={props.imposto}
          onChange={(entrada) => {
            props.setImpostos(entrada.target.value);
          }}
        />
      </InputArea>
    </>
  );
}
