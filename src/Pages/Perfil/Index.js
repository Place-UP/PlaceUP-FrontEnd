import React from "react";
import { Main, Body, Photo, Inf, Locate, NameEdit } from "./style";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import Self from "./img/perfil.svg";

export function Perfil() {
  return (
    <>
      <Header />
      <Main>
        <Body>

          <div className="Title">
            <p>Perfil</p>
          </div>

          <Inf>
            <Photo>
              <img src={Self} alt="Foto de Perfil Do Usuário" />
            </Photo>

            <NameEdit>
              <div> <p className="UserName">UserName</p></div>
             <div> <p> Editar Perfil </p></div>
            </NameEdit>

            <Locate>
              <p className="LocateState">
                Rua Endereço Numero Bairro Cidade Estado
              </p>
            </Locate>
          </Inf>
        </Body>
      </Main>
    </>
  );
}
