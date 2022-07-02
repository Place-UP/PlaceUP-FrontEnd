import { useState, useEffect } from "react";
import "./styles";
import supermarket from "./images/market.png";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { comercio5 } from "../../../mock/comerciante5";
import { Bussines5 } from "../../../mock/comerciante5";
import {
  Feed,
  Profile,
  ContainerProfile,
  Button,
  Product,
  CointanerProduct,
} from "./styles";

export function FeedUser5() {
  function colorFavorite() {
    const favorite = document.querySelector(".favorite");
    const disfavor = document.querySelector(".disfavor");

    favorite.classList.toggle("active");
    disfavor.classList.toggle("active");
  } 

  const box08 = comercio5.slice(0, 3);

  return (
    <>
      <Feed>
        <ContainerProfile className="containerProfile">
          {Bussines5.map((item) => (
            <Profile className="profile">
              <img src={item.pefilimg} alt="foto do comercio" />
              <h1>{item.owner}</h1>

              <button className="disfavor">
                <AiFillHeart
                  alt="Favorito"
                  className="favorite"
                  onClick={colorFavorite}
                />
              </button>
            </Profile>
          ))}
          
          <Link to="/VisualizacaoUsuario5">
            <Button className="buttonSeeMore">Veja Mais</Button>
          </Link>
        </ContainerProfile>

        <Product className="product">
          {box08.map((item) => (
            <CointanerProduct className="cointanerProduct">
              <img src={item.img} alt="Foto do Produto" />
              <h1>{item.name}</h1>
              <p>{item.price}</p>
            </CointanerProduct>
          ))}
          ;
        </Product>
      </Feed>
    </>
  );
}
