import React from "react";

export default function Imposto(props) {
    return (
        <div>
            <label>
                Imposto
                <input type="text" value={props.imposto} onChange={(entrada) => { props.setImpostos(entrada.target.value) }} />
            </label>


        </div>




    )




}