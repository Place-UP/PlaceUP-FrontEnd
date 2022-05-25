

import { Coment, Box, PerfilFoto, Container, Txt } from './styled';
import { depoiments } from '../../mock/InfoDepoiments';

export function Depoimentos() {
    return (
        <>
            <Txt>
                <h1>Depoimentos</h1>
            </Txt>
            <Container>
                {depoiments.map((item) => (
                    <Box key={item.id}>

                        <PerfilFoto>
                            <img src={item.img} alt="Foto de perfil" />
                            <span>{item.name}</span>
                        </PerfilFoto>
                        <Coment>
                            <h2>{item.coment}</h2>
                        </Coment>
                    </Box>
                ))}

            </Container>
        </>
    );
}