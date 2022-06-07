import React from "react";
import './styles'
import supermarket from "./images/market.png";
import produto from "./images/imageProduto.png";
import { AiOutlineHeart } from "react-icons/ai";
import { Feed, Profile, ContainerProfile, Button, Product, CointanerProduct } from "./styles";

export function FeedUser(props) {
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
                <CointanerProduct className="cointanerProduct">
                    <img src={produto} alt="Foto do Produto" />
                    <h1>Nome do Produto</h1>
                    <p>R$ 00,00</p>
                </CointanerProduct>    

                <CointanerProduct className="cointanerProduct">
                    <img src={produto} alt="Foto do Produto" />
                    <h1>Nome do Produto</h1>
                    <p>R$ 00,00</p>
                </CointanerProduct> 

                <CointanerProduct className="cointanerProduct">
                    <img src={produto} alt="Foto do Produto" />
                    <h1>Nome do Produto</h1>
                    <p>R$ 00,00</p>
                </CointanerProduct> 
            </Product>                                                    
        </Feed>
    </>
  );
}
