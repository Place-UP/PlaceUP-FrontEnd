import React, { useState } from 'react'
//---------------------Componentes---------------------------
import { CheckBox } from "../../Components/CheckBox";
import { Form, Label, Remember, Submit } from "./style";

//----------------Icones---------------------
import { HiUser } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

function useFormik({
    initialValues
}) {

    const [values, setValues] = useState(initialValues)

    function handleChange(event) {
        const fieldname = event.target.getAttribute('name')
        const value = event.target.value
        setValues({
            ...values,
            [fieldname]: value,
        })
    }

    return {
        values,
        handleChange
    }
}

export const Forms = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: ''
        }
    })

    return (
        <>
            <Form onSubmit={(e) => {
                e.preventDefault()
                console.log(formik.values)

            }}>
                <legend>Cadastro</legend>

                <Label htmlFor="name">
                    <i><HiUser /></i>
                    <input type="text"
                        name="name"
                        id="name"
                        placeholder="Nome"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        required />
                </Label>

                <Label htmlFor="email">
                    <i><MdEmail /></i>
                    <input type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        required />
                </Label>

                <Remember>
                    <CheckBox />
                </Remember>
                <Submit type="submit" value="Proximo" name="Button" />
            </Form>
        </>
    );
}