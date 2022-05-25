import { Txt } from "../ComentariosLading/styled";
import { Box, Container } from "./style";

import { cards } from "../../mock/infoCards";

export function Cards() {


    return (
        <>
            <Txt>
                <h1>Por que a Place UP?</h1>
            </Txt>
            <Container>
                {cards.map((item) => (
                    <Box key={item.id} primary={`0 10px 1px ${item.color}`}>
                        <div>
                            <img src={item.img} alt={item.alt} />
                            <span>{item.title}</span>
                            <p>{item.description}</p>
                        </div>
                    </Box>
                ))}
            </Container>
        </>
    );
}