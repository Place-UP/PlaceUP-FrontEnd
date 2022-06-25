import React from "react"
import { auth, provider } from '../../Services/firebase'
import * as C from "./style"

export function LoginChat() {
    const handleSignin = () => {
        auth.signInWithPopup(provider).catch(alert)
    }

    return (
        <C.Container>
            <C.Button onClick={handleSignin}> Login com Google </C.Button>
        </C.Container>
    )
}