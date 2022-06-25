import React, { useState, useRef } from 'react'
import { db } from '../../Services/firebase'
import * as C from './style'
import { useCollection } from 'react-firebase-hooks/firestore';
import { Message } from '../Mensage';
import { useEffect } from 'react';

export const ChatBody = ({ chatId }) => {
    const [menssagesRes] = useCollection(
        db
            .collection("chats")
            .doc(chatId)
            .collection("messages")
            .orderBy("timestamp", "asc")
    )

    const refBody = useRef("")

    useEffect(() => {
        if (refBody.current.scrollHeight > refBody.current.offsetHeight) {
            refBody.current.scrollTop =
                refBody.current.scrollHeight - refBody.current.offsetHeight
        }
    }, [menssagesRes])

    return (
        <C.Container ref={refBody}>
            {menssagesRes?.docs.map((message) => (
                <Message
                    key={message.id}
                    user={message.data().user}
                    message={{
                        message: message.data().message,
                        timestamp: message.data().timestamp?.toDate().getTime()
                    }}
                />
            ))}
        </C.Container>
    )
}
