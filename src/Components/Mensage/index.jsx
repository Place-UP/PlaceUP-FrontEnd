import React from "react";
import * as C from './style'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../Services/firebase";

export const Message = ({ user, message }) => {

    const [userLoggedin] = useAuthState(auth)

    return (
        <C.Container>
            <C.Line className={userLoggedin?.email === user ? "me" : ""}>
                <C.Content>
                    <C.Message>{message.message}</C.Message>
                    <C.MessageDate>
                        {new Date(message?.timestamp).toLocaleString()}
                    </C.MessageDate>
                </C.Content>
            </C.Line>
        </C.Container>
    )
}
