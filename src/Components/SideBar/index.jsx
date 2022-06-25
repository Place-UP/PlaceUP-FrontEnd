import { AiOutlineSearch } from 'react-icons/ai'
import { SideHeader } from '../SideHeader'
import { SibeChat } from '../SideChat'
import * as C from "./style"

export function SideBar({ setUserChat, userChat }) {
    return (
        <C.Container>
            <C.Search>
                <i><AiOutlineSearch /></i>
                <input type="search" placeholder='Pesquisar' />
            </C.Search>
            <SideHeader setUserChat={setUserChat} userChat={userChat} />
            <SibeChat setUserChat={setUserChat} userChat={userChat} />
        </C.Container>
    )
} 