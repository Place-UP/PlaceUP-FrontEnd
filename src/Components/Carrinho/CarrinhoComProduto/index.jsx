import React from "react";
import './styles'
import { AiOutlineClose } from "react-icons/ai";
import { Section, Information, Day, Scheduling, Cart, Product, ProductContainer, Finalize } from "./styles";

export function CarrinhoComProduto() {
  return (
    <>
      <Section>
        <div className="cart">
            <Information>
              <AiOutlineClose className="Close" />
              <div className="business">                  
                <h3>Seu pedido em </h3>
                <h1>Nome do Comércio</h1>
              </div>
            </Information>

            <Cart>
              <div className="cartContainer">                  
                <h1 className="Titule">Agendar para:</h1>

                <div className="ReservationSystem">
                    <Day>
                      <h1>Hoje:</h1>
                      <p>18:30h</p>
                    </Day>

                    <Scheduling>
                      <h1>Agendar para:</h1>
                      <p>07/07</p>
                      <p>20:00h</p>
                    </Scheduling>
                </div>
              </div>


              <Product>
                <ProductContainer>
                  <div className="product">
                    <h2>1x</h2>
                    <h1>Nome do Produto</h1>
                    <h1>R$ 100.00</h1>
                  </div>
                  <p>Remover</p>
                </ProductContainer>

                <ProductContainer>
                  <div className="product">
                    <h2>1x</h2>
                    <h1>Nome do Produto</h1>
                    <h1>R$ 100.00</h1>
                  </div>
                  <p>Remover</p>
                </ProductContainer>

                <ProductContainer>
                  <div className="product">
                    <h2>1x</h2>
                    <h1>Nome do Produto</h1>
                    <h1>R$ 100.00</h1>
                  </div>
                  <p>Remover</p>
                </ProductContainer>          
              </Product>


            </Cart>

            <Finalize>
              <div className="total">
                <h1>TOTAL</h1>
                <h1>R$ 300.00</h1>
              </div>

              <button className="buttonSeeMore">Finalizar Reserva</button>
            </Finalize>
        </div>  
      </Section>
    </>
  );
}
