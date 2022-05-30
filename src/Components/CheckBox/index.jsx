import { Forget } from "./style";


export function CheckBox() {
    return (
        <Forget>
            <input type="checkbox" id="chk1" />
            <label htmlFor="chk1">Lembrar senha</label>
        </Forget>
    );
}