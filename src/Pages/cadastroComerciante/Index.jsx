
//--------------Icones----------------
import { HiUser } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsTwitter, BsInstagram, BsGoogle } from 'react-icons/bs'

import { Link } from "react-router-dom";

//----------------imagens----------------
import Logo from '../../Img/CadastroComerciante/PlaceUp_animação.svg'
import Capa from '../../Img/CadastroComerciante/capa.svg'
import Seta from '../../Img/CadastroComerciante/seta.svg'
//----------------Componentes--------------
import {
    Container, BoxVetor, Login, BoxForm, Form, Label, Remember,
    Submit, SocialMidia, Termos, CapaVetor, Senha, Back
} from "./style";


import { CheckBox } from "../../Components/CheckBox";

export function CadastroComerciante() {
    return (
        <Container>
            <BoxVetor>
                <Login>
                    <img src={Logo} alt="Logo" />
                    <button><Link to="/Login">Login</Link></button>
                </Login>
                <CapaVetor>
                    <img src={Capa} alt="" />
                </CapaVetor>
            </BoxVetor>
            <BoxForm>
                <Back>
                    <img src={Seta} alt="Seta de voltar" />
                </Back>
                <Form>
                    <legend>Cadastro</legend>

                    <Label htmlFor="name">
                        <i><HiUser /></i>
                        <input type="text" name="name" id="name" placeholder="Nome" required />
                    </Label>

                    <Label htmlFor="email">
                        <i><MdEmail /></i>
                        <input type="email" name="email" id="email" placeholder="E-mail" required />
                    </Label>

                    <Remember>
                        <CheckBox />
                        <Senha>
                            <Link to="/" > Esqueceu a senha ?</Link>
                        </Senha>
                    </Remember>
                    <Submit type="submit" value="Proximo" name="Button" />
                </Form>
                <Termos>
                    <p>Ao cadastrar-se, você concorda com os <Link to="/Termos">Termos de uso e Privacidade </Link></p>
                </Termos>
                <SocialMidia>
                    <ul>
                        <li><BsFacebook /></li>
                        <li><BsTwitter /></li>
                        <li><BsInstagram /></li>
                        <li><BsGoogle /></li>
                    </ul>
                </SocialMidia>
            </BoxForm>
        </Container>

    );
}