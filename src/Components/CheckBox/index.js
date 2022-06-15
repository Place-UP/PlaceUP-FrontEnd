import { Forget } from "./style";
import React from 'react';

export function CheckBox() {
    return (
        <Forget>
            <input type="checkbox" id="chk1" />
            <label htmlFor="chk1">Lembrar-me</label>
        </Forget>
    );
}