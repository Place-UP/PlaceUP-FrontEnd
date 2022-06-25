import React from 'react'
import * as C from './style'
import { ChatHeader } from './../ChatHeader/index';
import { ChatBody } from './../ChatBody/index';
import { ChatFooter } from './../ChatFooter/index';

export const Chat = ({ userChat }) => {
    return (
        <C.Container>
            <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
            <ChatBody chatId={userChat?.chatId} />
            <ChatFooter chatId={userChat?.chatId} />
        </C.Container>
    )
}
