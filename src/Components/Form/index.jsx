
//---------------------Componentes---------------------------
import { CheckBox } from "../../Components/CheckBox";
import { Form, Label, Remember, Submit } from "./style";


//----------------Icones---------------------
import { HiUser } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export const Forms = () => {
    return (
        <>
            <Form>
                <legend>Cadastro</legend>

                <Label htmlFor="name">
                    <i><HiUser /></i>
                    <input type="text" name="name" id="name" placeholder="Nome" required />
                </Label>

                <Label htmlFor="email">
                    <i><MdEmail /></i>
                    <input type="email" name="email" id="email" placeholder="E-mail" required />
                </Label>

                <Remember>
                    <CheckBox />
                </Remember>
                <Submit type="submit" value="Proximo" name="Button" />
            </Form>
        </>
    );
}