import React from "react";

import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import { MenuPrincipal } from "../../Components/MenuPrincipal/index";
import { Main, Itens, Body, Merchant1 } from "./style";
import comerciante from "./img/comerciante.svg";
import teste from "./img/heart.svg";


export function Favoritos() {
  return (
    <>
      <Main>
      <Header />
      <MenuPrincipal />
      
      <Body>
        <div className="Title">
          <p>Favoritos</p>
        </div>

        <Itens>

            <Merchant1>
                <img className="Icon" src= {comerciante} alt = "Icon"/>
                <p>Comercio</p>
                <img className="Heart" scr= {teste} alt = "icon"/>
            </Merchant1>


        </Itens>
        </Body>
      </Main> 
    </>
  );
}
