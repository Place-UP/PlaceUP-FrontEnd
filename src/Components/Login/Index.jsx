
import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { IoLogoGoogle } from 'react-icons/io'
import {
    Container, Header, Logo, Ondulacao, Ondinha, Estrela, Box, Formulario,
    Legend, LabelBox, Icon, CampoInput, OR, List, SocialMidia
} from './style'


export function Login() {
    return (
        <>
            <Container>
                <Header>
                    <Logo>

                    </Logo>

                </Header>

                <Ondulacao>
                    <Ondinha />
                    <Ondinha />
                    <Estrela />
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