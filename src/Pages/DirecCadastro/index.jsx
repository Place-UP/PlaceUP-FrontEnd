import { Container, Box } from "./style";
import VetorUsuario from '../../Img/DirecCadastro/User 1.svg'
import VetorComerciante from '../../Img/DirecCadastro/Comerciante 1.svg'

import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from "react-router-dom";

import CenaLeftTop from '../../Img/DirecCadastro/CenarioLeftTop.svg'
import CenaRightTop from '../../Img/DirecCadastro/CenarioRightTop.svg'
import CenaRightBottom from '../../Img/DirecCadastro/CenarioRightBottom.svg'
import Seta from '../../Img/DirecCadastro/seta.svg'



export function DirecCadastro() {
    return (
        <Container>
            <Link to="/">
                <img className="seta" src={Seta} alt="Seta de voltar" />
            </Link >
            <img className="c1" src={CenaLeftTop} alt="Cenario De fundo" />
            <img className="c2" src={CenaRightTop} alt="Cenario De fundo" />
            <img className="c3" src={CenaRightBottom} alt="Cenario De fundo" />
            <Box>
                <img className="Img" src={VetorComerciante} alt="Comerciante vetor" />
                <h1>Comerciante</h1>
                <button>
                    <Link to="/CadastroComerciante">
                        <AiOutlineArrowRight />
                        <span>Cadastrar</span>
                    </Link>
                </button>
            </Box>
            <Box>
                <img className="Img" src={VetorUsuario} alt="Usuario vetor" />
                <h1>Usuário</h1>
                <button>
                    <Link to="/CadastroUsuario">
                        <AiOutlineArrowRight />
                        <span>Cadastrar</span>
                    </Link>
                </button>
            </Box>
        </Container>
    );
}