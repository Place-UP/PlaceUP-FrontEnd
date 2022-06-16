import { Main } from "./style";
import React, { useState } from "react";
import Preco from "./preco";
import Imposto from "./imposto";
import Calcular from "./calcularPreco";
import Lucros from "./margemLucro";
import Logo from "./img/mainLogo.svg";
import BackButton from "./img/BackButton.svg";
export function Calculator() {
    const [imposto, setImposto] = useState("");
    const [preco, setpreco] = useState("");
    const [result, setResultado] = useState();
    const [lucro, setlucro] = useState();
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
                    <div>
                        <Imposto imposto={imposto} setImpostos={setImposto} />
                        <Preco preco={preco} setprecos={setpreco} />
                        <Lucros lucro={lucro} setlucros={setlucro} />
                        <Calcular lucro={lucro} preco={preco} imposto={imposto} setResultado={setResultado} /></div>
                </div>
                <div className="ResulteWhite">


                </div>
                {/* <p> Resultado: {result.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p> */}

            </Main >
        </>
    );
} 