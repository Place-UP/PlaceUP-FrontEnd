import { HeaderComerciante } from "../../Components/HeaderComerciantes/HeaderComerciante"
import { Box, BoxImg, BoxSelect, BoxTitle, Calculator, Container, Img } from './style';
import fundoRight from '../../Img/Cursos/fundoRight.png'
import iconePC from '../../Img/Cursos/IconePC.png'
import { Link } from "react-router-dom"
import { CardsCursos } from '../../Components/CardsCursos'
import { FooterGeral } from '../../Components/FooterGeral/footer.js'

export function Cursos() {
    return (
        <>
            <HeaderComerciante />

            <Container>
                <Box>
                    <Img src={fundoRight} alt="" />
                    <BoxImg>
                        <img src={iconePC} alt="" />
                        <p>DICAS PARA DAR UM <span>UP</span> NO SEU COMÉRCIO! </p>
                    </BoxImg>
                </Box>
                <BoxTitle>
                    <p>Saber como administrar um pequeno negócio é um desafio para todos, especialmente para os empreendedores iniciantes que não têm experiência no assunto. Afinal, criar um bom planejamento estratégico é algo complexo, que envolve muitas etapas.</p>
                </BoxTitle>
                {/* <BoxSelect>
                    {select.map((item) => (
                <Link to="/calculadora">
                        <select key={item.id}>
                            <option value="Lorem">{item.title}</option>
                        </select>
                    </Link>
                    ))}
                    </BoxSelect> */}
                <CardsCursos />
                <Calculator>
                    <p>Além dessas dicas de como gerir o seu negócio, você pode aprender a precificar seu produto com o auxílio de nossa calculadora de precificação.</p>
                    <Link to="/calculadora">
                        <button>CALCULADORA</button>
                    </Link>
                </Calculator>
            </Container>
            <FooterGeral />
        </>
    )
}