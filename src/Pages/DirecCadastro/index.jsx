import { Container, Box } from "./style";

import { Link } from "react-router-dom";

import CenaLeftTop from '../../Img/DirecCadastro/CenarioLeftTop.svg'
import CenaRightTop from '../../Img/DirecCadastro/CenarioRightTop.svg'
import CenaRightBottom from '../../Img/DirecCadastro/CenarioRightBottom.svg'
import Seta from '../../Img/DirecCadastro/seta.svg'

import { direcCadastro } from "../../mock/DirecCadastro";

export function DirecCadastro() {
    return (
        <Container>
            <Link to="/">
                <img className="seta" src={Seta} alt="Seta de voltar" />
            </Link >
            <img className="c1" src={CenaLeftTop} alt="Cenario De fundo" />
            <img className="c2" src={CenaRightTop} alt="Cenario De fundo" />
            <img className="c3" src={CenaRightBottom} alt="Cenario De fundo" />

            {direcCadastro.map((item) => (
                <Box key={item.id}>
                    <img className="Img" src={item.img} alt={item.alt} />
                    <h1>{item.title}</h1>
                    <button>
                        <Link to={item.link}>
                            {item.icon}
                            <span>Cadastrar</span>
                        </Link>
                    </button>
                </Box>
            ))}

        </Container>
    );
}