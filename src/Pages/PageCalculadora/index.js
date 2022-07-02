import React from "react";
import { Link } from "react-router-dom";
import { HeaderComerciante } from "../../Components/HeaderComerciantes/HeaderComerciante";
import { FooterGeral } from "../../Components/FooterGeral/footer";
import YoutubeEmbed from "./EmbedVideoYT";
import { Main, Container, Cards, ContCards } from "./styles";
import Banner from "../../Img/Calculadora/BannerCalculadora.svg";
import Porcent2 from "../../Img/Calculadora/PorcentagemIcon2.svg";
import Porcent from "../../Img/Calculadora/PorcentagemIcon.svg";
import BackgroundFinal from "../../Img/Calculadora/FinalParte.svg";
import { calculadoraCards } from "../../mock/CardCalculadora";
import { InputDarkMode } from "../../Components/inputDark";

export function IndexCalculadora() {
  return (
    <>
      <HeaderComerciante />
      <InputDarkMode />
      <Main>
        <Container>
          <div className="ContainerBanner">
            <div className="TextArea">
              <h1>
                Pega a caneta e vem <br />
                calcular com
                <br /> a gente!
              </h1>
              <p>Calcular um produto nunca foi tão fácil.</p>
              <Link to="">
                <button>Voltar para a calculadora</button>
              </Link>
            </div>
            <div className="ImageArea">
              <img src={Banner} alt="." />
            </div>
          </div>
          <div className="HowToUseCalculatorP1">
            <div className="Tittle">
              <h1>Descomplicando a calculadora</h1>
              <hr />
            </div>
            <div className="paragraph">
              <p>
                Isso mesmo, é só preencher nosso formularios que nossa
                calculadora fará o resto.
                <br />
                <br />
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="BackgroundCardsParts">
            <div className="CardsPart">
              <div className="AreaTittle">
                <h1>Lorem Ipsum</h1>
                <span>
                  <p>Lorem Ipsum is simply dummy text </p>
                  <hr />
                </span>
              </div>
              <img className="PorcentIcon icon1" src={Porcent2} alt="" />
              <ContCards>
                {calculadoraCards.map((item) => {
                  const { id, img, title, Description, alt } = item;
                  return (
                    <Cards>
                      <div className="CardsTittle">
                        <span>{id}</span>
                        <h1>{title}</h1>
                      </div>

                      <div className="AreaWhite">
                        <div className="IntoCard">
                          <div className="IconCard">
                            <img src={img} alt={alt} />
                          </div>
                          <div className="Textarea">
                            <p>{Description}</p>
                          </div>
                        </div>
                      </div>
                    </Cards>
                  );
                })}
              </ContCards>
            </div>
            <img className="PorcentIcon icon2" src={Porcent} alt="" />
          </div>
          <div className="HowToUseCalculatorP1">
            <div className="Tittle">
              <h1>Descomplicando a calculadora</h1>
              <hr />
            </div>
            <div className="paragraph">
              <p>
                Isso mesmo, é só preencher nosso formularios que nossa
                calculadora fará o resto.
                <br />
                <br />
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <YoutubeEmbed />

          <div className="StartBackground">
            <div className="FinalPart">
              <div className="TittleFinalPart">
                <h1>Vamos Começar ?</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="BtnPart">
                <button>Começara calcular</button>
                <div className="ImageFinalContent">
                  <img src={BackgroundFinal} alt=";" />
                </div>
              </div>
            </div>
          </div>
        </Container>
        <FooterGeral />
      </Main>
    </>
  );
}
