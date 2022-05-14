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
    const [error, setError] = React.useState(false)
    const [sucess, setSucess] = React.useState()
    function digitei(event) {
        setComent(event.target.value)
        const Error = event.target.value;
        const Sucesso = event.target.value;

        if (Sucesso.length > 0) {
            setSucess(true)
        } else {
            setSucess(false)
        }

        if (Error === '') {
            setError(true)
        } else {
            setError(false)
        }
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
                    <Formulario action="" method="post">
                        <Legend>LOGIN</Legend>
                        <LabelBox htmlFor="email">
                            <Icon><HiOutlineMail /></Icon>
                            <CampoInput onChange={digitei} type="email" name="email" id="email" placeholder="E-mail" />
                            {sucess ? (
                                <>
                                    <IconeValidacao><img src={IconSucess} alt='Icone de Sucesso' /></IconeValidacao>
                                </>
                            ) : (
                                <>
                                </>
                            )}
                            {error ? (
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
                            <CampoInput onChange={digitei} type="password" id="password" name="password" placeholder="Senha" />
                            {sucess ? (
                                <>
                                    <IconeValidacao><img src={IconSucess} alt='Icone de Sucesso' /></IconeValidacao>
                                </>
                            ) : (
                                <>
                                </>
                            )}
                            {error ? (
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