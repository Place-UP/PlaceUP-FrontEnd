import { Link } from 'react-router-dom'

import Error404 from '../../Img/Error/Error.svg'
import CenarioErrorBottom from '../../Img/Error/CenarioErrorBottom.svg'
import CaixaPlaceUP from '../../Img/Error/CaixaPlaceUP.svg'
import CenarioErrorTop from '../../Img/Error/CenarioErrorTop.svg'

import { Container, Box, CenarioBottom, CenarioTop, BoxError } from './style'

export function Pagina404() {
    return (
        <Container>
            <CenarioBottom src={CenarioErrorBottom} alt="Img Cenario Bottom" />
            <CenarioTop src={CenarioErrorTop} alt="Img Cenario Top" />
            <Box>
                <img src={Error404} alt="Vetor de error404" />
                <span>Está pagina não existe</span>
                <Link to="/">Voltar</Link>
            </Box>
            <BoxError>
                <img src={CaixaPlaceUP} alt="Caixa PlaceUP" />
            </BoxError>
        </Container>
    )
}