import React, { useContext, useState } from "react";
import './styles'
import { AiOutlineClose } from "react-icons/ai";
import * as C from './styles.js'
import { PedidoEfetuado } from './../PedidoEfetuado/index';
import { CartContext } from "../../../Common/Context";
import { IoMdTrash } from 'react-icons/io'

export function CarrinhoComProduto() {

  const [isOpen, setIsOpen] = useState(true)
  const [component, setComponent] = useState(false)

  const { carrinho, HandleRemoveCart } = useContext(CartContext)

  return (
    <>
      {isOpen ? (
        <>
          <C.Section>
            <div className="cart">
              <C.Information>
                <AiOutlineClose className="Close" onClick={() => setIsOpen(!isOpen)} />
                <div className="business">
                  <h3>Seu pedido em </h3>
                  <h1>Nome do Comércio</h1>
                </div>
              </C.Information>

              <C.Cart>
                <div className="cartContainer">
                  <h1 className="Titule">Agendar para:</h1>

                  <div className="ReservationSystem">
                    <C.Day>
                      <h1>Hoje:</h1>
                      <p>18:30h</p>
                    </C.Day>

                    <C.Scheduling>
                      <h1>Agendar para:</h1>
                      <p>07/07</p>
                      <p>20:00h</p>
                    </C.Scheduling>
                  </div>
                </div>
                <C.Product>
                  <C.ProductContainer>
                    {carrinho.map((item) => {
                      const { id, qtd, name, price, image } = item

                      return (
                        <>
                          <C.Box key={id}>
                            <img src={image} alt="" />
                            <h1 className="Qtd">{qtd}</h1>
                            <div className="names">
                              <h1>{name}</h1>
                              <h1>{price}</h1>
                            </div>
                            <p onClick={() => HandleRemoveCart(id)}><IoMdTrash /></p>
                          </C.Box>
                        </>
                      )
                    })}
                  </C.ProductContainer>
                </C.Product>
              </C.Cart>
              <C.Finalize>
                <C.Total>
                  <h1>TOTAL</h1>
                  <h1>R$ 00.00</h1>
                </C.Total>
                <button className="buttonSeeMore" onClick={() => setComponent(!component)}>Finalizar</button>
              </C.Finalize>
            </div>
          </C.Section>
        </>
      ) : (
        <>

        </>)}

      {component ? (
        <>
          <PedidoEfetuado />
        </>
      ) : (
        <>
        </>
      )}
    </>
  );
}
