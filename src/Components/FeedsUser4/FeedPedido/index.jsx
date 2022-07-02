import React from "react";
import './styles'
import produto from "./images/imageProduto.png";
import { Feed, Product, CointanerProduct } from "./styles";
import { comercio4 } from "../../../mock/comercio4";

export function FeedPedido4() {
  return (
    <>
        <Feed>
        <Product className="product">
            {comercio4.map((item) => (
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
