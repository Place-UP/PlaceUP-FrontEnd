
import LogoPlace from '../../Img/Login/PlaceUp_Logo.svg'
import Onda from '../../Img/Login/Ondas_Top.svg'
import EstilizacaoOnda from '../../Img/Login/Ondas_Top copy.svg'
import Star from '../../Img/Login/cruz.svg'



import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { IoLogoGoogle } from 'react-icons/io'
import {
    Container, Header, Logo, Ondulacao, Ondinha, Estrela, Box, Formulario,
    Legend, LabelBox, Icon, CampoInput, OR, List, SocialMidia, FooterOnda, Wave, Waves
} from './style'


export function Login() {
    return (
        <>
            <Container>
                <Header>
                    <Logo>
                        <img src={LogoPlace} alt='Logo placeUP' />
                    </Logo>

                </Header>

                <Ondulacao>
                    <Ondinha src={Onda} alt='Ondas login' />
                    <Ondinha primary src={EstilizacaoOnda} alt='Onda Estilização' />
                    <Estrela src={Star} alt='Estrela' />
                    <Estrela primary src={Star} alt='Estrela' />
                    <Estrela second src={Star} alt='Estrela' />
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
                        <LabelBox>
                            <Icon><HiOutlineMail /></Icon>
                            <CampoInput type="email" name="email" placeholder="E-mail" />
                        </LabelBox>
                        <LabelBox primary>
                            <Icon><RiLockPasswordLine /></Icon>
                            <CampoInput type="password" name="senha" placeholder="Senha" />
                        </LabelBox>
                        <input type="submit" value="Entrar" />
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
            </Container>
        </>
    )
}