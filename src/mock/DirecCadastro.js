import VetorUsuario from '../Img/DirecCadastro/User 1.svg'
import VetorComerciante from '../Img/DirecCadastro/Comerciante 1.svg'
import { AiOutlineArrowRight } from 'react-icons/ai'

export const direcCadastro = [
    {
        id: 1,
        img: VetorComerciante,
        alt: "Usuário vetor",
        title: "Usuário",
        icon: <AiOutlineArrowRight />,
        link: "/CadastroUsuario"
    },

    {
        id: 2,
        img: VetorUsuario,
        alt: "Comerciante vetor",
        title: "Comerciante",
        icon: <AiOutlineArrowRight />,
        link: "/CadastroComerciante"
    },
]
