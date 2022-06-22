//----------------------Componentes-------------------------
import { Container, BoxVetor, Form, Back, CapaVetor } from "./style";
import { Forms } from '../../Components/Form/index'
import { Midia } from "../../Components/SocialMidia/Index";
import { Register2 } from './../../Components/Register2/index';
import { Link } from "react-router-dom";

import Vetor from '../../Img/CadastroUser/capa.svg'
import Seta from '../../Img/CadastroUser/seta.svg'

export function CadastroUser() {
    return (
        <Container>
            <Form>
                <Back>
                    <Link to="/DirecCadastro">
                        <img src={Seta} alt="Seta De voltar" />
                    </Link>
                </Back>
                <Forms />
                <Midia />
            </Form>
            <BoxVetor>
                <Register2 />
                <div className="boxShadow"></div>
                <CapaVetor>
                    <img src={Vetor} alt="Vetor Cadastro Usuario" />
                </CapaVetor>
            </BoxVetor>
        </Container>
    );
}