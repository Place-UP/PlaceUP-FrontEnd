import { useState, useEffect } from "react";
import "./styles";
import supermarket from "./images/market.png";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { comercio4 } from "../../../mock/comercio4";
import { Bussines4 } from "../../../mock/comercio4";
import {
  Feed,
  Profile,
  ContainerProfile,
  Button,
  Product,
  CointanerProduct,
} from "./styles";

export function FeedUser4() {
  function colorFavorite() {
    const favorite = document.querySelector(".favorite");
    const disfavor = document.querySelector(".disfavor");

    favorite.classList.toggle("active");
    disfavor.classList.toggle("active");
  }

  const box08 = comercio4.slice(0, 3);

  return (
    <>
      <Feed>
        <ContainerProfile className="containerProfile">
          {Bussines4.map((item) => (
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

          <Link to="/VisualizacaoUsuario4">
            <Button className="buttonSeeMore">Veja Mais</Button>
          </Link>
        </ContainerProfile>

        <Product className="product">
          {box08.map((item) => (
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
