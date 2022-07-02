import React from "react";
import './styles'
import produto from "./images/imageProduto.png";
import { Feed, Product, CointanerProduct } from "./styles";
import { comercio6 } from "../../../mock/comercio6";

export function FeedPedido6() {
  return (
    <>
        <Feed>
        <Product className="product">
            {comercio6.map((item) => (
            <CointanerProduct className="cointanerProduct">
              <img src={item.image} alt="Foto do Produto" />
              <h1>{item.name}</h1>
              <p>{item.price}</p>
            </CointanerProduct>  
            ))}          
        </Product>                                                         
        </Feed>
    </>
  );
}
