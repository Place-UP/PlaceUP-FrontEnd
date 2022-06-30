import React from "react";
import './styles'
import supermarket from "./images/market.png";
import { AiOutlineHeart } from "react-icons/ai";
import { box } from "../../../mock/boxVisalizer";
import { Feed, Profile, ContainerProfile, Button, Product, CointanerProduct } from "./styles";

const copiaArray = box.slice(0,3);

export function FeedUser() {
  return (
    <>
        <Feed>
            <ContainerProfile className="containerProfile">
                <Profile className="profile">
                    <img src={supermarket} alt="foto do comércio" />
                    <h1>NameMarket</h1>
                    <AiOutlineHeart alt="Favorito" className="favorite" />
                </Profile>
                
                <Button className="buttonSeeMore">Veja Mais</Button>
            </ContainerProfile> 

            <Product className="product">
                {copiaArray.map((item) => {
                    const { name, price, image } = item;
                    return (
                        <CointanerProduct className="cointanerProduct">
                            <img src={image} alt="Foto do Produto" />
                            <h1>{name}</h1>
                            <p>{price}</p>
                        </CointanerProduct> 
                    );
                    })}
            </Product>                                                    
        </Feed>
    </>
  );
}
