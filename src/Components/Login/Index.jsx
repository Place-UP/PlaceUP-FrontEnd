import SetaVoltar from '../../Img/Login/SetaVoltar.svg'
import Onda from '../../Img/Login/Ondas_Top.svg'
import EstilizacaoOnda from '../../Img/Login/Ondas_Top copy.svg'
import Star from '../../Img/Login/cruz.svg'
import Ball from '../../Img/Login/circulo.svg'
import IconSucess from '../../Img/Login/IconSUCESS.svg'
import IconERROR from '../../Img/Login/IconERROR.svg'

import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { IoLogoGoogle } from 'react-icons/io'
import {
    Container, Header, Logo, Ondulacao, Ondinha, Estrela, Box, Formulario,
    Legend, LabelBox, Icon, CampoInput, OR, List, SocialMidia, FooterOnda,
    Wave, Waves, Bolinha, IconeValidacao
} from './style'

import { Link } from 'react-router-dom'

import React from 'react'


export function Login() {

    const [coment, setComent] = React.useState()
    const [errorEmail, setErrorEmail] = React.useState(null)
    const [sucessEmail, setSucessEmail] = React.useState(null)
    const [errorPassword, setErrorPassword] = React.useState(null)
    const [sucessPassword, setSucessPassword] = React.useState(null)


    function digiteiEmail(event) {
        setComent(event.target.value)

        const Error = event.target.value;
        const Sucesso = event.target.value;

        if (Sucesso.length > 0) {
            setSucessEmail(true)
        } else {
            setSucessEmail(false)
        }

        if (Error === '') {
            setErrorEmail(true)
        } else {
            setErrorEmail(false)
        }
    }

    function digiteiPassword(event) {
        setComent(event.target.value)

        const Error = event.target.value;
        const Sucesso = event.target.value;

        if (Sucesso.length > 0) {
            setSucessPassword(true)
        } else {
            setSucessPassword(false)
        }

        if (Error === '') {
            setErrorPassword(true)
        } else {
            setErrorPassword(false)
        }
    }


    function LoginUser(e) {
        e.preventDefault()
    }


    return (
        <>
            <Container>
                <Header>
                    <Logo>
                        <Link to="/">
                            <img src={SetaVoltar} alt='Logo placeUP' />
                        </Link>
                    </Logo>

                </Header>

                <Ondulacao>
                    <Ondinha src={Onda} alt='Ondas login' />
                    <Ondinha primary src={EstilizacaoOnda} alt='Onda Estilização' />
                    <Estrela id="Estrela1" src={Star} alt='Estrela' />
                    <Estrela id="Estrela2" src={Star} alt='Estrela' />
                    <Estrela id='Estrela3' src={Star} alt='Estrela' />
                    <Bolinha src={Ball} alt="Circle" />
                    <FooterOnda>
                        <Waves>
                            <Wave id="Wave1" />
                            <Wave id="Wave2" />
                            <Wave id="Wave3" />
                        </Waves>
                    </FooterOnda>
                </Ondulacao>
                <Box>
                    <Formulario onClick={LoginUser} action="" method="post">
                        <Legend>LOGIN</Legend>
                        <LabelBox htmlFor="email">
                            <Icon><HiOutlineMail /></Icon>
                            <CampoInput onChange={digiteiEmail} type="email" name="email" id="email" placeholder="E-mail" />
                            {sucessEmail ? (
                                <>
                                    <IconeValidacao><img src={IconSucess} alt='Icone de Sucesso' /></IconeValidacao>
                                </>
                            ) : (
                                <>
                                </>
                            )}
                            {errorEmail ? (
                                <>
                                    <IconeValidacao><img src={IconERROR} alt='Icone de ERROR' /></IconeValidacao>
                                </>
                            ) : (
                                <>
                                </>
                            )}
                        </LabelBox>
                        <LabelBox htmlFor="password" primary >
                            <Icon><RiLockPasswordLine /></Icon>
                            <CampoInput onChange={digiteiPassword} type="password" id="password" name="password" placeholder="Senha" />
                            {sucessPassword ? (
                                <>
                                    <IconeValidacao><img src={IconSucess} alt='Icone de Sucesso' /></IconeValidacao>
                                </>
                            ) : (
                                <>
                                </>
                            )}
                            {errorPassword ? (
                                <>
                                    <IconeValidacao><img src={IconERROR} alt='Icone de ERROR' /></IconeValidacao>
                                </>
                            ) : (
                                <>
                                </>
                            )}
                        </LabelBox>
                        <input disabled={!coment} type="submit" value="Enviar" />
                    </Formulario>
                    <OR>
                        <span>OR</span>
                    </OR>
                    <div>
                        <List>
                            <SocialMidia><BsFacebook /></SocialMidia>
                            <SocialMidia><AiOutlineTwitter /></SocialMidia>
                            <SocialMidia><AiFillInstagram /></SocialMidia>
                            <SocialMidia><IoLogoGoogle /></SocialMidia>
                        </List>
                    </div>
                </Box>
            </Container >
        </>
    )
}