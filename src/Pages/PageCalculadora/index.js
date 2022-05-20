import React from "react";
import { HeaderComerciante } from "../../Components/HeaderComerciantes/HeaderComerciante";
import { FooterGeral } from "../../Components/FooterGeral/footer";
import {
  Main,
  Container,
  HowToUseCalculator,
  VideoHowtoUseCalculator,
} from "./styles";
import Calculadora from "../../Img/BackgroundHowUseCalculator.svg";
import MulherCalculadora from "../../Img/WomanUsingCalculator.svg";
import "./styles";
import YoutubeEmbed from "./EmbedVideoYT";
import { Link } from "react-router-dom";

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
        <VideoHowtoUseCalculator>
          <h1>Mas como que usa essa calculadora ?</h1>
          <YoutubeEmbed />
          <Link to="" className="ButtonGoToCalculator">
            <span>Calculadora</span>
          </Link>
        </VideoHowtoUseCalculator>
      </Main>
      {/* <FooterGeral /> */}
    </>
  );
}
