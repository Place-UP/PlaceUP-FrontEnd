import React from "react";

export default function Preco(props) {
    return (
        <div>
            <label>
                preço pago pelo produto:
                <input type="text" value={props.preco} onChange={(entrada) => { props.setprecos(entrada.target.value) }} />
            </label>
        </div>
    )


}