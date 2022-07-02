import React from "react";
import './styles'
import supermarket from "./images/market.png";
import produto from "./images/imageProduto.png";
import { Link } from "react-router-dom";
import { Feed, Profile, ContainerProfile, Button, Product, CointanerProduct } from "./styles";
import { comercio4 } from "../../../mock/comercio4";
import { Bussines4 } from "../../../mock/comercio4";

export function FeedReservas4() {

    const box08 = comercio4.slice(0, 3);

    return (
        <>
            <Feed>
                <ContainerProfile className="containerProfile">
                    {Bussines4.map((item) => (
                        <Profile className="profile">
                            <img src={item.pefilimg} alt="foto do comércio" className="foto-perfil" />

                            <div>
                                <h1>{item.owner}</h1>
                                <p>07/07/2022 - PEDIDO #0690590 - <span>PENDENTE</span>   </p>
                            </div>
                        </Profile>
                    ))}
                    <Link
                        to="/Pedido4"
                    ><Button className="buttonSeeMore">Veja Lista</Button></Link>
                </ContainerProfile>

                <Product className="product">
                    {box08.map((item) => (
                        <CointanerProduct className="cointanerProduct">
                            <img src={item.image} alt="Foto do Produto" />
                        </CointanerProduct>
                    ))}
                </Product>

            </Feed>
        </>
    );
}
