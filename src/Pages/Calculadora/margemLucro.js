import React from "react";
import { InputArea } from "./style";

export default function Lucros(props) {
  return (
    <>
      <InputArea>
        <p> Margem de lucro desejada:*</p>
        <input
          type="number"
          maxLength="10"
          placeholder="Digite aqui %"
          value={props.lucro}
          onChange={(entrada) => {
            props.setlucros(
              entrada.target.value.replace(/[^-\d.]/g, "").replace(/^-,/, "")
            );
          }}
        />
      </InputArea>
    </>
  );
}
