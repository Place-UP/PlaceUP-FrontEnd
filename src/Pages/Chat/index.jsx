import React, { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth'

import { SideBar } from "../../Components/SideBar";
import { HeaderComerciante } from "../../Components/HeaderComerciantes/HeaderComerciante";
import { auth, db } from "../../Services/firebase";
import { LoginChat } from "../../Components/LoginChat";
import * as C from './style'
import { Chat } from "../../Components/Chat";


export function ChatComerciante() {
    const [user] = useAuthState(auth)
    const [userChat, setUserChat] = useState(null)
    useEffect(() => {
        if (user) {
            db.collection("users").doc(user.uid).set({
                email: user.email,
                photoURL: user.photoURL
            })
        }
    }, [user])

    if (!user) return <LoginChat />

    return (
        <C.Container>
            <HeaderComerciante />
            <Chat userChat={userChat} />
            <SideBar setUserChat={setUserChat} userChat={userChat} />
        </C.Container>
    )
}