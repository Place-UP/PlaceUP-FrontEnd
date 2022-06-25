import React from "react"
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../../Services/firebase'
import { MdPerson } from 'react-icons/md'
import * as C from './style'

const getUser = (users, userLogged) => users?.filter((user) => user !== userLogged?.email)[0]

export const SlideBarChatsItem = ({ id, users, user, setUserChat, active }) => {
    const [getUserItem] = useCollection(
        db.collection("users").where("email", "==", getUser(users, user))
    )

    const Avatar = getUserItem?.docs?.[0]?.data()
    const item = getUser(users, user)

    const handleNewChat = () => {
        const userChat = {
            chatId: id,
            name: item.split("@")[0],
            photoURL: Avatar?.photoURL
        }
        setUserChat(userChat)
    }

    return (
        <C.Container onClick={handleNewChat} className={active}>
            {Avatar ? <C.Avatar src={Avatar?.photoURL} /> : <MdPerson />}
            <C.Name>{item}</C.Name>
        </C.Container>
    )
}