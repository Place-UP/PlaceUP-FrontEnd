//----------------------Componentes-------------------------
import { Container, BoxVetor, Form, Vetores, Back, CapaVetor, Img } from "./style";
import { Forms } from '../../Components/Form/index'
import { Midia } from "../../Components/SocialMidia/Index";
import { Register2 } from './../../Components/Register2/index';
import { Link } from "react-router-dom";

import Vetor from '../../Img/CadastroUser/capa.svg'
import Seta from '../../Img/CadastroUser/seta.svg'
import Fundo from '../../Img/CadastroUser/Fundo.svg'


export function CadastroUser() {
    return (
        <Container>
            <BoxVetor>
                <Form>
                    <Back>
                        <Link to="/DirecCadastro">
                            <img src={Seta} alt="Seta De voltar" />
                        </Link>
                    </Back>
                    <Forms />
                    <Midia />
                </Form>
                <Vetores>
                    <Img src={Fundo} alt="Fundo" />
                    <Register2 />
                    <CapaVetor>
                        <img src={Vetor} alt="Vetor Cadastro Usuario" />
                    </CapaVetor>
                </Vetores>
            </BoxVetor>
        </Container>
    );
}