import React, { useState } from 'react'
//---------------------Componentes---------------------------
import { CheckBox } from "../../Components/CheckBox";
import { Form, Label, Remember, Submit } from "./style";

import { Formr } from '../../mock/Form';


export const Forms = () => {

    const [text, setText] = useState()
    const [coment, setComent] = useState(null)

    function comente(e) {
        setText(e.target.value)

        if (coment.lenght > setText) {
            setComent(true)

        } else {
            setComent(false)
        }
    }

    return (
        <>
            <Form onSubmit={(e) => {
                e.preventDefault()
            }}>
                <legend>Cadastro</legend>
                {Formr.map((item) => (
                    <Label key={item.id} htmlFor={item.htmlFor} >
                        <i>{item.icon}</i>
                        <input type={item.type} name={item.name} id={item.aidi} placeholder={item.placeholder} maxLength={item.maxLeght} onChange={comente} required />
                        <img src={item.Error} />
                        <img src={item.Sucess} />
                    </Label>
                ))}

                <Remember>
                    <CheckBox />
                </Remember>
                <Submit disabled={!text} type="submit" value="Proximo" name="Button" />
            </Form>
        </>
    );
}