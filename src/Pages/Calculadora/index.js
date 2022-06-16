import { Main, InputArea } from "./style";
import React, { useState } from "react";
import Preco from "./preco";
import Imposto from "./imposto";
import Calcular from "./calcularPreco";
import Lucros from "./margemLucro";
import Resultado from "./resultado";
import Adicional from "./Adicional";
import AdicionalPorcentagem from "./AdicionalPorcentagem";
import Logo from "./img/mainLogo.svg";
import BackButton from "./img/BackButton.svg";

export function Calculator() {
  const [imposto, setImposto] = useState("");
  const [preco, setpreco] = useState("");
  const [result, setResultado] = useState("");
  const [lucro, setlucro] = useState("");
  const [adicional, setadicional] = useState(null);
  const [adicionalPorcentagem, setadicionalPorcentagem] = useState(null);
  const [Product, setProduct] = useState("");
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

              <Calcular
                adicionalPorcentagem={adicionalPorcentagem}
                adicional={adicional}
                lucro={lucro}
                preco={preco}
                imposto={imposto}
                setResultado={setResultado}
              />
            </div>
            <div className="ResulteWhite">
              <h1>{Product}</h1>
              <div className="InformationsDescription">
                <p>Imposto:{imposto} </p>
                <p>Margem de lucro: {lucro} </p>
                <p>Valor pago:{preco} </p>
                <p>Custo Adicional: {adicional}</p>
                <p>Custo Adicional: {adicionalPorcentagem}</p>
              </div>
              <Resultado resultado={result} />
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
                <p>{result}</p>
                <p>{result}</p>
                <p>{result}</p>
              </div>

              <div className="TableGoogleShopping">
                <span>Google Shopping</span>
                <p>{result}</p>
                <p>{result}</p>
                <p>{result}</p>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
