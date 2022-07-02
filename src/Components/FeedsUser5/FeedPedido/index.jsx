import React from "react";
import './styles'
import produto from "./images/imageProduto.png";
import { Feed, Product, CointanerProduct } from "./styles";
import { comercio5 } from "../../../mock/comerciante5";

export function FeedPedido5() {
  return (
    <>
        <Feed>
        <Product className="product">
            {comercio5.map((item) => (
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
