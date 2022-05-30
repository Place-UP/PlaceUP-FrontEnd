import { Link } from "react-router-dom";

//----------------imagens----------------
import Capa from '../../Img/CadastroComerciante/capa.svg'
import Seta from '../../Img/CadastroComerciante/seta.svg'
//----------------Componentes--------------
import {
    Container, BoxVetor, BoxForm, Termos, CapaVetor, Back
} from "./style";

import { Forms } from '../../Components/Form/index'
import { Midia } from '../../Components/SocialMidia/Index'
import { Register } from "../../Components/Register";

export function CadastroComerciante() {

    return (
        <Container>
            <BoxVetor>
                <Register />
                <CapaVetor>
                    <img src={Capa} alt="" />
                </CapaVetor>
            </BoxVetor>
            <BoxForm>
                <Back>
                    <Link to="/" >
                        <img src={Seta} alt="Seta de voltar" />
                    </Link>
                </Back>
                <Forms />
                <Termos>
                    <p>Ao cadastrar-se, você concorda com os <Link to="/Termos">Termos de uso e Privacidade </Link></p>
                </Termos>
                <Midia />
            </BoxForm>
        </Container>

    );
}