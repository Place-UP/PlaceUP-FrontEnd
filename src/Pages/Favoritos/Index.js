import React from "react";

import { Main, Itens, Body, Merchant1 } from "./style";
import comerciante from "./img/comerciante.svg";
import heart from "./img/heart.svg"
import { MenuPrincipal } from "../../Components/MenuPrincipal/index";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";

export function Favoritos() {

  return (
    <>

      <Main>
        <Header />
        <MenuPrincipal/>
        <Body>
           
          <div className="Title">
            <p>FAVORITOS</p>
          </div>

          <Itens>

            <Merchant1>
              <img className="Icon" src={comerciante} alt="Icon" />
              <p>Comercio</p>
              <img className="Heart" src={heart} alt="Like" />
            </Merchant1>

            <Merchant1>
              <img className="Icon" src={comerciante} alt="Icon" />
              <p>Comercio</p>
              <img className="Heart" src={heart} alt="Like" />
            </Merchant1>

            <Merchant1>
              <img className="Icon" src={comerciante} alt="Icon" />
              <p>Comercio</p>
              <img className="Heart" src={heart} alt="Like" />
            </Merchant1>

            <Merchant1>
              <img className="Icon" src={comerciante} alt="Icon" />
              <p>Comercio</p>
              <img className="Heart" src={heart} alt="Like" />
            </Merchant1>

            <Merchant1>
              <img className="Icon" src={comerciante} alt="Icon" />
              <p>Comercio</p>
              <img className="Heart" src={heart} alt="Like" />
            </Merchant1>

            <Merchant1>
              <img className="Icon" src={comerciante} alt="Icon" />
              <p>Comercio</p>
              <img className="Heart" src={heart} alt="Like" />
            </Merchant1>

            <Merchant1>
              <img className="Icon" src={comerciante} alt="Icon" />
              <p>Comercio</p>
              <img className="Heart" src={heart} alt="Like" />
            </Merchant1>

            <Merchant1>
              <img className="Icon" src={comerciante} alt="Icon" />
              <p>Comercio</p>
              <img className="Heart" src={heart} alt="Like" />
            </Merchant1>

          </Itens>
        </Body>
      </Main>
    </>
  );
}
