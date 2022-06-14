import React from "react";

export default function Lucros(props) {
    return (
        <div>
            <label>
                Margem de lucro desejada:
                <input type="text" value={props.lucro} onChange={(entrada) => { props.setlucros(entrada.target.value) }} />
            </label>

        </div>
    )

}