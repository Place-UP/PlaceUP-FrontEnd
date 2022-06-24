import React, { useState } from "react";
import { BoxAdd, Container } from "./style.js";
import { IoMdAdd } from 'react-icons/io'
import { FiBox } from 'react-icons/fi'
import { Modal } from "./style.js";

import { Link } from 'react-router-dom'


export function BtnCreateProdutc() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            <BoxAdd>
                <button onClick={() => setIsOpen(!isOpen)}> <IoMdAdd /></button>
            </BoxAdd >
            <Modal className={isOpen ? "active" : "none"}>
                <Link to="">
                    <span>Adicionar</span>
                    <span><FiBox /></span>
                </Link>
                <Link to="">
                    <span>Adicionar</span>
                    <span><FiBox /></span>
                </Link>
            </Modal>
        </Container>
    );
}