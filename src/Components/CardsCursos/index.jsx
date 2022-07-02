import { Box, BoxImg, Container, Courses, Paragraph, Txt, TxtBox } from "./style";
import { Cards } from '../../mock/selectCurso.js'

export function CardsCursos() {
    return (
        <Container>
            <Paragraph>
                <h1>PLACEUP INDICA</h1>
                <p></p>
            </Paragraph>
            {Cards.map((item) => (
                <Courses key={item.id}>
                    <TxtBox>
                        <h2>{item.CousersTitle}</h2>
                        <p>{item.CousersInfo}</p>
                    </TxtBox>
                        <a href={item.link}>
                    <Box >
                        <BoxImg>
                            <img src={item.img} alt="" />
                        </BoxImg>
                        <Txt>
                            <span>{item.title}</span>
                            <p>{item.curso}</p>
                            <p>{item.info}</p>
                        </Txt>
                    </Box>
                    </a>
                </Courses>
            ))}
        </Container>
    )
}