import { Main, InputArea, ButtonStyle } from "./style";
import React, { useState } from "react";
import Preco from "./preco";
import Imposto from "./imposto";
import Calcular from "./calcularPreco";
import Lucros from "./margemLucro";
import Unidade from "./Unidades";
import Resultado from "./resultado";
import Adicional from "./Adicional";
import AdicionalPorcentagem from "./AdicionalPorcentagem";
import Logo from "./img/mainLogo.svg";
import BackButton from "./img/BackButton.svg";

export function Calculator() {
  const [imposto, setImposto] = useState();
  const [preco, setpreco] = useState();
  const [result, setResultado] = useState();
  const [lucro, setlucro] = useState();
  const [adicional, setadicional] = useState();
  const [adicionalPorcentagem, setadicionalPorcentagem] = useState();
  const [Product, setProduct] = useState();
  const [unidade, setUnidade] = useState();

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  function del() {
    setImposto("");
    setpreco("");
    setResultado("");
    setlucro("");
    setadicional("");
    setadicionalPorcentagem("");
    setUnidade("");
  }
  const formatterPorcent = new Intl.NumberFormat("pt-BR", {});

  return (
    <>
      <Main>
        <div className="container">
          <img className="backButton" src={BackButton} alt="Logo" />
          <div className="header">
            <div className="textArea">
              <img src={Logo} alt="Logo" />
              <h1>Calculadora de precificação</h1>
              <p>Calcular um produto nunca foi tão fácil.</p>
            </div>
          </div>

          <div className="ContainerCalculator">
            <div>
              <InputArea>
                <h1> Coloque o nome do produto</h1>

                <input
                  type="text"
                  value={Product}
                  placeholder="Nome do produto"
                  onChange={(entrada) => {
                    setProduct(entrada.target.value);
                  }}
                />
              </InputArea>
              <Imposto imposto={imposto} setImpostos={setImposto} />
              <Lucros lucro={lucro} setlucros={setlucro} />
              <Preco preco={preco} setprecos={setpreco} />
              <Adicional adicional={adicional} setadicional={setadicional} />
              <AdicionalPorcentagem
                adicionalPorcentagem={adicionalPorcentagem}
                setadicionalPorcentagem={setadicionalPorcentagem}
              />
              <Unidade setUnidade={setUnidade} />

              <Calcular
                unidade={unidade}
                adicionalPorcentagem={adicionalPorcentagem}
                adicional={adicional}
                lucro={lucro}
                preco={preco}
                imposto={imposto}
                setResultado={setResultado}
                setUnidade={setUnidade}
              />
            </div>
            <div className="ResulteWhite">
              <h1>{Product}</h1>
              <div className="InformationsDescription">
                <p>
                  Imposto:{" "}
                  {!imposto ? "" : formatterPorcent.format(imposto) + "%"}
                </p>
                <p>
                  Margem de lucro:{" "}
                  {!lucro ? "" : formatterPorcent.format(lucro) + "%"}
                </p>
                <p>Valor pago: {!preco ? "" : formatter.format(preco)} </p>
                <p>
                  Custo Adicional: {""}
                  {!adicional ? "" : formatter.format(adicional)}
                </p>
                <p>
                  Custo Adicional:{" "}
                  {!adicionalPorcentagem
                    ? ""
                    : formatterPorcent.format(adicionalPorcentagem) + "%"}
                </p>
              </div>
              <Resultado
                resultado={
                  !result
                    ? ""
                    : result.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })
                }
              />

              <span>
                Valor unitário:{" "}
                {!(result / unidade) ? "" : formatter.format(result / unidade)}
              </span>
              <div className="buttonContainer">
                <ButtonStyle onClick={del}>
                  <p>Redefinir</p>
                </ButtonStyle>
              </div>
            </div>
          </div>
          <div className="TableSimilarPrices">
            <div className="TableTitle">
              <h1> Tabela PlaceUp</h1>

              {/* <p>Última atualização: </p> */}
            </div>
            <div className="TableContainer">
              <div className="TableTitleList">
                <span>Produto: {Product}</span>
                <p>Mínimo</p>
                <p>Média</p>
                <p>Máximo</p>
              </div>
              <div className="TablePlaceUP">
                <span>PlaceUP</span>
                <p>{formatter.format(result)}</p>
                <p>{formatter.format(result)}</p>
                <p>{formatter.format(result)}</p>
              </div>

              <div className="TableGoogleShopping">
                <span>Google Shopping</span>
                <p>{formatter.format(result)}</p>
                <p>{formatter.format(result)}</p>
                <p>{formatter.format(result)}</p>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
