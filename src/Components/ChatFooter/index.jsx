import React, { useState } from 'react'
import * as C from './style'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../Services/firebase';
import { MdSend } from 'react-icons/md';
import { AiOutlinePaperClip } from 'react-icons/ai'
import firebase from 'firebase/compat/app';

export const ChatFooter = ({ chatId }) => {
    const [user] = useAuthState(auth)
    const [message, setMessage] = useState("")

    const handleSendMessage = (e) => {
        e.preventDefault()

        db.collection("chats").doc(chatId).collection("messages").add({
            message: message,
            user: user.email,
            photoURL: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setMessage("")
    }

    return (
        <C.Container>
            <C.Form onSubmit={handleSendMessage}>
                <C.Icone>
                    <AiOutlinePaperClip />
                </C.Icone>
                <C.Input
                    placeholder='Mensagem'
                    onChange={(e) => setMessage(e.target.value)}
                />
                <C.Icone>
                    <MdSend onClick={handleSendMessage} />
                </C.Icone>
            </C.Form>
        </C.Container>
    )
}
