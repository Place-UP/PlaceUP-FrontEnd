import React from "react";
import { InputArea } from "./style";
export default function Preco(props) {
    return (
        <>
            <InputArea>
                <p>preço pago pelo produto:*</p>
                <input type="text" placeholder="Digite aqui R$" value={props.preco} onChange={(entrada) => { props.setprecos(entrada.target.value) }} />
            </InputArea>
        </>
    )


}