import { Link } from 'react-router-dom';
import Logo from '../../Img/CadastroComerciante/PlaceUp_animação.svg'

import { Regis } from './style'


export const Register2 = () => {

    return (
        <Regis>
            <img src={Logo} alt="Logo" />
            <Link to="/CadastroComerciante">
                <button>Comerciante</button>
            </Link>
        </Regis>
    );
}