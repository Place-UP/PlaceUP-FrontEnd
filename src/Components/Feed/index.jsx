import React from "react";
import './styles'
import supermarket from "./images/market.png";
import produto from "./images/imageProduto.png";
import { AiOutlineHeart } from "react-icons/ai";
import { Feed, Profile, ContainerProfile, Button, Produto, CointanerProduto } from "./styles";

export function FeedUser(props) {
  return (
    <>
        <Feed>
            <ContainerProfile className="containerProfile">
                <Profile className="profile">
                    <img src={supermarket} alt="foto do comércio" className="foto-perfil" />
                    <h1>NameMarket</h1>
                    <AiOutlineHeart alt="Favorito" className="favorito" />
                </Profile>
                
                <Button className="buttonVejaMais">Veja Mais</Button>
            </ContainerProfile> 

            <Produto className="produto">
                <CointanerProduto className="cointanerProduto">
                    <img src={produto} alt="Foto do Produto" />
                    <h1>Nome do Produto</h1>
                    <p>R$ 00,00</p>
                </CointanerProduto>    

                <CointanerProduto className="cointanerProduto">
                    <img src={produto} alt="Foto do Produto" />
                    <h1>Nome do Produto</h1>
                    <p>R$ 00,00</p>
                </CointanerProduto> 

                <CointanerProduto className="cointanerProduto">
                    <img src={produto} alt="Foto do Produto" />
                    <h1>Nome do Produto</h1>
                    <p>R$ 00,00</p>
                </CointanerProduto> 
            </Produto>                                                    
        </Feed>
    </>
  );
}
