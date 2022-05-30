import { Link } from 'react-router-dom';
import Logo from '../../Img/CadastroComerciante/PlaceUp_animação.svg'

import { Regis } from './style';


export const Register = () => {
    return (
        <Regis>
            <img src={Logo} alt="Logo" />
            <button><Link to="/CadastroUsuario">Usuario</Link></button>
        </Regis>
    );
}