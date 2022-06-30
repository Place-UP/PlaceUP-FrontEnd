import React from "react";
import './styles'
import supermarket from "./images/market.png";
import produto from "./images/imageProduto.png";
import { Link } from "react-router-dom";
import { Feed, Profile, ContainerProfile, Button, Product, CointanerProduct } from "./styles";

export function FeedReservas() {
  return (
    <>
        <Feed>
            <ContainerProfile className="containerProfile">
                <Profile className="profile">
                    <img src={supermarket} alt="foto do comércio" className="foto-perfil" />

                    <div>                    
                        <h1>NameMarket</h1>
                        <p>07/07/2022 - PEDIDO #0690590 - <span>PENDENTE</span>   </p>   
                    </div>
                </Profile>
                
                <Link
                to="/Pedido"                
                ><Button className="buttonSeeMore">Veja Lista</Button></Link>
            </ContainerProfile> 

            <Product className="product">
                <CointanerProduct className="cointanerProduct">
                    <img src={produto} alt="Foto do Produto" />
                </CointanerProduct>    

                <CointanerProduct className="cointanerProduct">
                    <img src={produto} alt="Foto do Produto" />
                </CointanerProduct> 

                <CointanerProduct className="cointanerProduct">
                    <img src={produto} alt="Foto do Produto" />
                </CointanerProduct> 
            </Product>                                                    
        </Feed>
    </>
  );
}
