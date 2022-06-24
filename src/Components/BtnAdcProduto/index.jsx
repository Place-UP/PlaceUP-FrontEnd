import React, { useState } from "react";
import { BoxAdd, Container } from "./style.js";
import { IoMdAdd } from 'react-icons/io'
import { FiBox } from 'react-icons/fi'
import { HiOutlinePencil } from 'react-icons/hi'

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
                <div className="Box">
                    <Link to="/AddProduct">
                        <span>Adicionar</span>
                        <span><FiBox /></span>
                    </Link>
                </div>
                <div className="Box">
                    <Link to="">
                        <span>Editar</span>
                        <span><HiOutlinePencil /></span>
                    </Link>
                </div>
            </Modal>
        </Container>
    );
}