import React from "react";
import './styles'
import supermarket from "./images/market.png";
import produto from "./images/imageProduto.png";
import { Feed, Profile, ContainerProfile, Button, Produto, CointanerProduto } from "./styles";

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
                
                <Button className="buttonVejaMais">Veja Lista</Button>
            </ContainerProfile> 

            <Produto className="produto">
                <CointanerProduto className="cointanerProduto">
                    <img src={produto} alt="Foto do Produto" />
                </CointanerProduto>    

                <CointanerProduto className="cointanerProduto">
                    <img src={produto} alt="Foto do Produto" />
                </CointanerProduto> 

                <CointanerProduto className="cointanerProduto">
                    <img src={produto} alt="Foto do Produto" />
                </CointanerProduto> 
            </Produto>                                                    
        </Feed>
    </>
  );
}
