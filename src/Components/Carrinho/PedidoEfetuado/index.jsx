import React, { useState } from "react";
import './styles'
import Check from "./images/check.png"
import { AiOutlineClose } from "react-icons/ai";
import { Section, Confirmation } from "./styles";

export function PedidoEfetuado() {

  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      {isOpen ? (
        <Section>
          <div className="OrderPlaced">
            <div>
              <AiOutlineClose className="Close" onClick={() => setIsOpen(!isOpen)} />
            </div>

            <Confirmation>
              <div className="ConfirmationContainer">
                <h1>SEU PEDIDO - #06042002</h1>
                <h2>Foi efetuado</h2>
                <img src={Check} alt="Confirmado"></img>
              </div>
            </Confirmation>
          </div>
        </Section>
      ) : (
        <></>
      )}

    </>
  );
}
