import React from "react";
import './styles'
import produto from "./images/imageProduto.png";
import { Feed, Product, CointanerProduct } from "./styles";
import { comercio2 } from "../../../mock/comercio2";

export function FeedPedido2() {
  return (
    <>
        <Feed>
        <Product className="product">
            {comercio2.map((item) => (
            <CointanerProduct className="cointanerProduct">
              <img src={item.img} alt="Foto do Produto" />
              <h1>{item.name}</h1>
              <p>{item.price}</p>
            </CointanerProduct>  
            ))}          
        </Product>                                                         
        </Feed>
    </>
  );
}
