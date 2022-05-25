import React from "react";
import './styles'
import { AiOutlineClose } from "react-icons/ai";
import { Section, Carrinho } from "./styles";

export function CarrinhoVazio() {
  return (
    <>
      <Section>
        <div className="CarrinhoVazio">
            <div>
              <AiOutlineClose className="Close" />
            </div>

            <Carrinho>
              <div className="carrinhoContainer">                  
                <h1>Seu carrinho está vazio</h1>
                <h2>Adicione itens</h2>
              </div>
            </Carrinho>
        </div>  
      </Section>
    </>
  );
}
