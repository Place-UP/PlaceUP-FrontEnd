import { Link } from "react-router-dom";

//----------------imagens----------------
import Capa from '../../Img/CadastroComerciante/capa.svg'
import Seta from '../../Img/CadastroComerciante/seta.svg'
//----------------Componentes--------------
import {
    Container, BoxVetor, BoxForm, CapaVetor, Back
} from "./style";

import { Forms } from '../../Components/FormPhoneComerc'
import { Register } from "../../Components/Register/index";

export function CadastroComerTel() {

    return (
        <Container>
            <BoxVetor>
                <Register />
                <div className="boxShadow"></div>
                <CapaVetor>
                    <img src={Capa} alt="" />
                </CapaVetor>
            </BoxVetor>
            <BoxForm>
                <Back>
                    <Link to="/CadastroComerciante" >
                        <img src={Seta} alt="Seta de voltar" />
                    </Link>
                </Back>
                <Forms />
            </BoxForm>
        </Container>

    );
}