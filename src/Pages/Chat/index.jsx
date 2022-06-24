import { Contact } from "../../Components/Contact";
import { HeaderComerciante } from "../../Components/HeaderComerciantes/HeaderComerciante";
import { Chat, Container } from './style'

export function ChatComerciante() {
    return (
        <Container>
            <HeaderComerciante />
            <Chat>
                <h1>Olá</h1>
            </Chat>
            <Contact />
        </Container>
    )
}