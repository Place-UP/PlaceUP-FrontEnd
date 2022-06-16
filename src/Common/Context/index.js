import { createContext } from 'react'
import { useState } from 'react'
import React from "react";

import { box } from '../../mock/boxVisalizer';

export const CartContext = createContext({});
CartContext.displayName = "Carrinho"

export const CartContextProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState(box);

    function HandleAddCart(id) {

    }

    function HandleRemoveCart(id) {

    }

    return (
        <CartContext.Provider value={{ carrinho, setCarrinho, HandleAddCart, HandleRemoveCart }}>
            {children}
        </CartContext.Provider>
    );
}
