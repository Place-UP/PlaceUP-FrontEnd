import { React } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../Services/firebase';
import * as C from './style'
import { useCollection } from 'react-firebase-hooks/firestore';
import { SlideBarChatsItem } from '../SideBarChatsItem';


export const SibeChat = ({ setUserChat, userChat }) => {
    const [user] = useAuthState(auth)

    const refChat = db
        .collection("chats")
        .where("users", "array-contains", user.email)

    const [chatsSnapshot] = useCollection(refChat)

    return (
        <C.Container>
            {chatsSnapshot?.docs.map((item, index) => (
                <C.Content key={index}>
                    <SlideBarChatsItem
                        id={item.id}
                        users={item.data().users}
                        user={user}
                        setUserChat={setUserChat}
                        active={userChat?.chatId === item.id ? "active" : ""}
                    />
                    <C.Divider />
                </C.Content>
            ))}
        </C.Container>
    )
}