import React from "react"
import { auth, provider } from '../../Services/firebase'
import * as C from "./style"
import Logo from "../../Img/PlaceUp animação.svg";

export function LoginChat() {
    const handleSignin = () => {
        auth.signInWithPopup(provider).catch(alert)
    }

    return (
        <C.Container>
            <div>
                <img src={Logo} alt="Imagem-Logo" />
            </div>

            <C.Button onClick={handleSignin}> Login com Google </C.Button>
        </C.Container>
    )
}