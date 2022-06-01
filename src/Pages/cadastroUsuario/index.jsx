//----------------------Componentes-------------------------
import { Container, BoxVetor, Form, Vetores, Termos, Back, CapaVetor } from "./style";
import { Forms } from '../../Components/Form/index'
import { Midia } from "../../Components/SocialMidia/Index";

import Vetor from '../../Img/CadastroUser/capa.svg'

import { Link } from "react-router-dom";

import Seta from '../../Img/CadastroUser/seta.svg'

import { Register2 } from './../../Components/Register2/index';

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
                    <Termos>
                        <p>Ao cadastrar-se, você concorda com os <Link to="/Termos">Termos de uso e Privacidade </Link></p>
                    </Termos>
                    <Midia />
                </Form>
                <Vetores>
                    <Register2 />
                    <CapaVetor>
                        <img src={Vetor} alt="Vetor Cadastro Usuario" />
                    </CapaVetor>
                </Vetores>
            </BoxVetor>
        </Container>
    );
}