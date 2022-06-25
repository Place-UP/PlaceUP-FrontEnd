import React from 'react'
import * as C from './style'
import { MdPerson } from 'react-icons/md'

export const ChatHeader = ({ photoURL, name }) => {
    return (
        <div>
            <C.Container>
                <C.UserInfo>
                    {photoURL ? <C.Avatar src={photoURL} alt="Avatar" /> : <MdPerson />}
                    <C.NameContent>
                        <C.Name>{name}</C.Name>
                    </C.NameContent>
                </C.UserInfo>
            </C.Container>
        </div>
    )
}
