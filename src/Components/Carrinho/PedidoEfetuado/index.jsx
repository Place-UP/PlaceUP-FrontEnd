import React from "react";
import './styles'
import Check from "./images/check.png"
import { AiOutlineClose } from "react-icons/ai";
import { Section, Confirmacao } from "./styles";

export function PedidoEfetuado() {
  return (
    <>
      <Section>
        <div className="PedidoEfetuado">
            <div>
              <AiOutlineClose className="Close" />
            </div>

            <Confirmacao>
              <div className="confirmacaoContainer">                  
                <h1>SEU PEDIDO - #06042002</h1>
                <h2>Foi efetuado</h2>
                <img src={Check} alt="Confirmado"></img>
              </div>
            </Confirmacao>
        </div>  
      </Section>
    </>
  );
}
