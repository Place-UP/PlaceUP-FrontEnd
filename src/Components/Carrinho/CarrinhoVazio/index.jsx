import React from "react";
import './styles'
import { AiOutlineClose } from "react-icons/ai";
import { Section, Cart } from "./styles";

export function CarrinhoVazio() {
  return (
    <>
      <Section>
        <div className="EmptyCart">
            <div>
              <AiOutlineClose className="Close" />
            </div>

            <Cart>
              <div className="cartContainer">                  
                <h1>Seu carrinho está vazio</h1>
                <h2>Adicione itens</h2>
              </div>
            </Cart>
        </div>  
      </Section>
    </>
  );
}
