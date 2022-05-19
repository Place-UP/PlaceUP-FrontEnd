<<<<<<< HEAD


export function IndexCalculadora() {
  return (
    <>
      <h1>Oi</h1>

=======
import React from "react";
import { HeaderComerciante } from "../../Components/HeaderComerciantes/HeaderComerciante";
import { FooterGeral } from "../../Components/FooterGeral/footer";
import { Main, Container, HowToUseCalculator } from "./styles";
import Calculadora from "../../Img/bannercapaCalculadora.png";
import MulherCalculadora from "../../Img/MulherCalculadora.png";
import "./styles";
export function IndexCalculadora() {
  return (
    <>
      <HeaderComerciante />
      <Main>
        <Container>
          <div className="text">Descomplicando a calculadora</div>
          <div>
            <img
              className="vectorCalculator"
              src={Calculadora}
              alt="calculadora"
            />
          </div>
        </Container>
        <HowToUseCalculator>
          <div>
            <img src={MulherCalculadora} alt="teste" />
          </div>
          <div>
            <h1>Mas é só colocar os valores?</h1>
            <p>
              Isso mesmo, é só preencher nosso formularios que nossa calculadora
              fará o resto.
            </p>
          </div>
        </HowToUseCalculator>
      </Main>
      {/* <FooterGeral /> */}
>>>>>>> 5dd69fa08677147146a90b8866edf6caa9340dcf
    </>
  );
}
