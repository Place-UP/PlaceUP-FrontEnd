import { useState } from "react";

//--------------Icones----------------
import { HiUser } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsTwitter, BsInstagram, BsGoogle } from 'react-icons/bs'

import { Link } from "react-router-dom";

//----------------imagens----------------
import Logo from '../../Img/CadastroComerciante/PlaceUp_animação.svg'
import Capa from '../../Img/CadastroComerciante/capa.svg'
//----------------Componentes--------------
import {
    Container, BoxVetor, Login, BoxForm, Form, Label, Remember,
    Submit, Forget, SocialMidia, Termos, ImgFundo, CapaVetor
} from "./style";


export function CadastroComerciante(props) {
    return (

        <Container>
            <BoxVetor>
                <Login>
                    <img src={Logo} alt="Logo" />
                    <button>Login</button>
                </Login>
                <CapaVetor>
                    <img src={Capa} alt="" />
                </CapaVetor>
            </BoxVetor>
            <BoxForm>
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
                        <Forget>
                            <input type="checkbox" value={props.value} onChange={props.onEvent} />
                            <span>Lembrar senha</span>
                        </Forget>
                        <Forget>
                            <Link to="/" > Esqueceu a senha ?</Link>
                        </Forget>
                    </Remember>
                    <Submit type="submit" value="Proximo" name="Button" />
                </Form>
                <Termos>
                    <p>Ao cadastrar-se, você concorda com os <Link to="">Termos de uso e Privacidade </Link></p>
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