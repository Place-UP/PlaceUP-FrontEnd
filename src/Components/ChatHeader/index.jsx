import React from 'react'
import * as C from './style'
import { MdPerson } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';
import { SideHeader } from '../SideHeader';
import { SideBar } from '../SideBar';
import { SlideBarChatsItem } from '../SideBarChatsItem';
import { SibeChat } from '../SideChat';

export const ChatHeader = ({ photoURL, name }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <C.Container>
                <C.UserInfo>
                    {photoURL ? <C.Avatar src={photoURL} alt="Avatar" /> : <MdPerson />}
                    <C.NameContent>
                        <C.Name>{name}</C.Name>
                    </C.NameContent>
                </C.UserInfo>
                <C.Menu onClick={() => setIsOpen(!isOpen)}>
                    <button>
                        <GiHamburgerMenu />
                    </button>
                </C.Menu>
            </C.Container>

            {isOpen ? (
                <>
                    <SideHeader />
                    <SibeChat />
                </>
            ) : (
                <>
                </>
            )}
        </div>
    )
}
