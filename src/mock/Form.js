import { HiUser } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai"
import { BsFillGeoAltFill } from "react-icons/bs"
import { RiLockPasswordFill } from "react-icons/ri"
import { AiFillIdcard } from 'react-icons/ai'

//-------------------iconACD----------------------
import visaoBaixa from '../Img/Form/visaoBaixa.svg'
import libra from '../Img/Form/Libra.svg'
import surdo from '../Img/Form/Surdo.svg'
import cadeirante from '../Img/Form/Cadeirante.svg'

import Error from '../Img/Form/IconERROR.svg'
import Sucess from '../Img/Form/IconSUCESS.svg';

export const Formr = [
    {
        id: 1,
        htmlFor: "email",
        icon: <HiUser />,
        type: "text",
        name: "name",
        placeholder: "Nome",
        maxLeght: 50,
        Error: Error,
        Sucess: Sucess
    },

    {
        id: 2,
        htmlFor: "email",
        icon: <MdEmail />,
        type: "email",
        name: "email",
        placeholder: "E-mail",
        maxLeght: 254,
        Error: Error,
        Sucess: Sucess
    }
]

export const FormrUser = [
    {
        id: 1,
        htmlFor: "Telefone",
        icon: <AiFillPhone />,
        type: "tel",
        name: "tel",
        placeholder: "Telefone",
        maxLeght: 11,
        Error: Error,
        Sucess: Sucess
    }
]

export const FormUserPassWord = [
    {
        id: 1,
        htmlFor: "Senha",
        icon: <RiLockPasswordFill />,
        type: "password",
        name: "password",
        placeholder: "Senha",
        maxLeght: 20,
        Error: Error,
        Sucess: Sucess
    },

    {
        id: 2,
        htmlFor: "Confirme senha",
        icon: <RiLockPasswordFill />,
        type: "password",
        name: "password",
        placeholder: "Confirme senha",
        maxLeght: 20,
        Error: Error,
        Sucess: Sucess
    },
]

export const FormComerTel = [
    {
        id: 1,
        htmlFor: "Tel",
        icon: <AiFillPhone />,
        type: "tel",
        name: "tel",
        placeholder: "Telefone",
        maxLeght: 9,
        Error: Error,
        Sucess: Sucess
    },

    {
        id: 2,
        htmlFor: "CNPJ",
        icon: <AiFillIdcard />,
        type: "number",
        name: "number",
        placeholder: "CNPJ",
        maxLeght: 20,
        Error: Error,
        Sucess: Sucess
    },
]

export const FormComerLocalizacao = [
    {
        id: 1,
        htmlFor: "CEP",
        icon: <AiFillPhone />,
        type: "number",
        name: "number",
        placeholder: "CEP",
        maxLeght: 8,
        Error: Error,
        Sucess: Sucess
    }
]

export const FormACD = [
    {
        id: 1,
        htmlFor: "CEP",
        icon: <BsFillGeoAltFill />,
        type: "number",
        name: "number",
        placeholder: "CEP",
        maxLeght: 8,
        Error: Error,
        Sucess: Sucess
    }
]

export const CheckACDicons = [
    {
        id: 1,
        icons: visaoBaixa,
        alt: "Icone de baixa visão"
    },
    {
        id: 2,
        icons: libra,
        alt: "Icone de Libras"
    },
    {
        id: 3,
        icons: surdo,
        alt: "Icone de Surdo"
    },
    {
        id: 4,
        icons: cadeirante,
        alt: "Icone de cadeirante"
    }
]