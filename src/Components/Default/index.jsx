import React from "react"
import * as C from './style'
import { MdMessage } from "react-icons/md"

export const Default = () => {
    return (
        <C.Container>
            <MdMessage />
            <C.Title>Chat App</C.Title>
            <C.Info>
                Agora você pode enviar e receber mensagens sem precisar manter seu celular conectado a internet
            </C.Info>
        </C.Container>
    )
}