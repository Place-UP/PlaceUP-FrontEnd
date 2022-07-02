import React from "react";
import { InputArea } from "./style";

export default function Adicional(props) {
  return (
    <>
      <InputArea>
        <p>Gostaria de Adicionar algum valor adicional? </p>
        <input
          type="number"
          maxLength="10"
          placeholder="Digite aqui R$"
          value={props.adicional}
          onChange={(entrada) => {
            props.setadicional(
              entrada.target.value.replace(/[^-\d.]/g, "").replace(/^-,/, "")
            );
          }}
        />
      </InputArea>
    </>
  );
}
