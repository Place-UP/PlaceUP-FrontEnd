import React from "react";
import './styles'
import { AiOutlineClose } from "react-icons/ai";
import { Section, Infomacoes, Hoje, Agendamento, Carrinho, Produto, ContainerProduto, Finalizar, Button } from "./styles";

export function CarrinhoComProduto() {
  return (
    <>
      <Section>
        <div className="Carrinho">
            <Infomacoes>
              <AiOutlineClose className="Close" />
              <div className="comercio">                  
                <h3>Seu pedido em </h3>
                <h1>Nome do Comércio</h1>
              </div>
            </Infomacoes>

            <Carrinho>
              <div className="carrinhoContainer">                  
                <h1 className="Titule">Agendar para:</h1>

                <div className="SistemaReserva">
                    <Hoje>
                      <h1>Hoje:</h1>
                      <p>18:30h</p>
                    </Hoje>

                    <Agendamento>
                      <h1>Agendar para:</h1>
                      <p>07/07</p>
                      <p>20:00h</p>
                    </Agendamento>
                </div>
              </div>


              <Produto>
                <ContainerProduto>
                  <div className="produto">
                    <h1>1x</h1>
                    <h1>Nome do Produto</h1>
                    <h1>R$ 100.00</h1>
                  </div>
                  <p>Remover</p>
                </ContainerProduto>

                <ContainerProduto>
                  <div className="produto">
                    <h1>1x</h1>
                    <h1>Nome do Produto</h1>
                    <h1>R$ 100.00</h1>
                  </div>
                  <p>Remover</p>
                </ContainerProduto>

                <ContainerProduto>
                  <div className="produto">
                    <h1>1x</h1>
                    <h1>Nome do Produto</h1>
                    <h1>R$ 100.00</h1>
                  </div>
                  <p>Remover</p>
                </ContainerProduto>
              </Produto>


            </Carrinho>

            <Finalizar>
              <div className="total">
                <h1>TOTAL</h1>
                <h1>R$ 300.00</h1>
              </div>

              <button className="buttonVejaMais">Finalizar Reserva</button>
            </Finalizar>
        </div>  
      </Section>
    </>
  );
}
