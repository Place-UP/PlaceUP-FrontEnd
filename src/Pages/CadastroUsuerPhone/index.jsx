import { Container, BoxVetor, Form, Back, CapaVetor } from "./style";
import { Forms } from '../../Components/FormPhoneUser/index'
import { Register2 } from '../../Components/Register2/index';
import { Link } from 'react-router-dom'

import Seta from '../../Img/CadastroUser/seta.svg'
import Vetor from '../../Img/CadastroUser/capa.svg'

export function CadastroUserPhone() {
    return (
        <Container>
            <Form>
                <Back>
                    <Link to="/CadastroUsuario">
                        <img src={Seta} alt="Seta De voltar" />
                    </Link>
                </Back>
                <Forms />
            </Form>
            <BoxVetor>
                <Register2 />
                <div className="boxShadow"></div>
                <CapaVetor>
                    <img src={Vetor} alt="Vetor Cadastro Usuario" />
                </CapaVetor>
            </BoxVetor>
        </Container>
    )
}