import { Header } from "../../Components/HeaderUsuario/HeaderUser"
import { Box, BoxImg, BoxSelect, BoxTitle, Calculator, Container, Img } from './style';
import fundoRight from '../../Img/Cursos/fundoRight.png'
import iconePC from '../../Img/Cursos/IconePC.png'

import { select } from '../../mock/selectCurso.js'
import { CardsCursos } from '../../Components/CardsCursos'
import { InputDarkMode } from "../../Components/inputDark";
import { FooterGeral } from '../../Components/FooterGeral/footer.js'

export function Cursos() {
    return (
        <>
            <Header />            
            <InputDarkMode />
            <Container>
                <Box>
                    <Img src={fundoRight} alt="" />
                    <BoxImg>
                        <img src={iconePC} alt="" />
                        <p>DICAS PARA DAR UM <span>UP</span> NO SEU COMÉRCIO! </p>
                    </BoxImg>
                </Box>
                <BoxTitle>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur mollit anim id est  odjaojd ojdaojod aoda o koa  laborum.</p>
                </BoxTitle>
                <BoxSelect>
                    {select.map((item) => (
                        <select key={item.id}>
                            <option value="Lorem">{item.title}</option>
                        </select>
                    ))}
                </BoxSelect>
                <CardsCursos />
                <Calculator>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <button>CALCULADORA</button>
                </Calculator>
            </Container>
            <FooterGeral />
        </>
    )
}