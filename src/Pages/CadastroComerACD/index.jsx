import { Link } from "react-router-dom";

//----------------imagens----------------
import Capa from '../../Img/CadastroComerciante/capa.svg'
import Seta from '../../Img/CadastroComerciante/seta.svg'
//----------------Componentes--------------
import {
    Container, BoxVetor, BoxForm, CapaVetor, Back
} from "./style";

import { Forms } from '../../Components/FormACD'
import { Register } from "../../Components/Register/index";

export function CadastroComerACD() {

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
                    <Link to="/CadastroComerTel" >
                        <img src={Seta} alt="Seta de voltar" />
                    </Link>
                </Back>
                <Forms />
            </BoxForm>
        </Container>

    );
}