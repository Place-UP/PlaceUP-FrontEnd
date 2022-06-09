import { useRef } from 'react';

//---------------icons-----------------
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

import { Coment, Box, PerfilFoto, Container, Txt, Buttons, Carrousel } from './styled';
import { depoiments } from '../../mock/InfoDepoiments';

export function Depoimentos() {

    const carrousel = useRef(null)

    const leftClick = (e) => {
        e.preventDefault()

        carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
    }

    const rightClick = (e) => {
        e.preventDefault()

        carrousel.current.scrollLeft += carrousel.current.offsetWidth;

    }

    return (
        <>
            <Txt>
                <h1>Depoimentos</h1>
            </Txt>
            <Buttons>
                <button onClick={leftClick}><BiLeftArrow /></button>
                <button onClick={rightClick}><BiRightArrow /></button>
            </Buttons>
            <Container ref={carrousel}>
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