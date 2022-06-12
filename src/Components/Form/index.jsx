import React, { useState } from 'react'
//---------------------Componentes---------------------------
import { CheckBox } from "../../Components/CheckBox";
import { Form, Label, Remember, Submit } from "./style";

import { Formr } from '../../mock/Form';



export const Forms = () => {

    const [inputsForms, setInputsForms] = useState(Formr)

    const [text, setText] = useState(false)

    function comente(e, id) {
        setText(e.target.value)

        const newInputsForms = [...inputsForms]

        console.log(inputsForms)
        const itemIndex = newInputsForms.findIndex(item => item.id === id)

        if (text.length > 4) {
            newInputsForms[itemIndex].sucess = true;
        } else {
            newInputsForms[itemIndex].sucess = false
        }

        setInputsForms(newInputsForms)
    }


    function validateHasErrorInput() {
        const hasError = inputsForms.filter(item => !item?.sucess);

        if (hasError.length > 0) {
            return true;
        } else {
            return false;
        }


    }

    return (
        <>
            <Form onSubmit={(e) => {
                e.preventDefault()

            }}>
                <legend>Cadastro</legend>
                {inputsForms.map((item) => (
                    <Label key={item.id} htmlFor={item.htmlFor} >
                        <i>{item.icon}</i>
                        <input type={item.type} name={item.name} id={item.aidi} placeholder={item.placeholder} maxLength={item.maxLeght} onChange={(event) => comente(event, item.id)} required />
                        {item?.sucess ? (
                            <img src={item.Sucess} />
                        ) : (
                            <img src={item.Error} />
                        )}
                    </Label>
                ))}

                <Remember>
                    <CheckBox />
                </Remember>
                <Submit disabled={validateHasErrorInput()} type="submit" value="Proximo" name="Button" />
            </Form>
        </>
    );
}