import React from "react";
import { HeaderComerciante } from "../../Components/HeaderComerciantes/HeaderComerciante";
import { FooterGeral } from "../../Components/FooterGeral/footer";
import { Main, BannerContainer } from "./styles";
import "./styles";
import Calculadora from "../../Img/bannercapaCalculadora.png";
export function IndexCalculadora() {
  return (
    <>
      <HeaderComerciante />
      <Main>
        <BannerContainer>
          <div className="texto">Descomplicando a calculadora</div>
          <div>
            <img className="imgs" src={Calculadora} alt="calculadora" />
          </div>
        </BannerContainer>
      </Main>
      <FooterGeral />
    </>
  );
}
