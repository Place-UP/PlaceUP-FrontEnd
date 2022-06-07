import { HiUser } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
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