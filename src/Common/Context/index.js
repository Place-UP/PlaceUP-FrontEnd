import { createContext } from 'react'
import { useState } from 'react'
import React from "react";

import { box } from '../../mock/boxVisalizer';

export const CartContext = createContext({});
CartContext.displayName = "Carrinho"

export const CartContextProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    function HandleAddCart(id) {
        const copyProductsCart = [...carrinho];

        const item = copyProductsCart.find((product) => product.id === id);

        if (!item) {
            copyProductsCart.push({ id: id, qtd: 1 });
        } else {
            item.qtd = item.qtd + 1;
        }
        setCarrinho(copyProductsCart);

        //setCarrinho([...carrinho, item])
    }

    function HandleRemoveCart(id) {
        const copyProductsCart = [...carrinho];

        const item = copyProductsCart.find((product) => product.id === id);

        if (item.qtd > 1) {
            item.qtd = item.qtd - 1;
            setCarrinho(copyProductsCart);
        } else {
            const arrayFiltered = copyProductsCart.filter(
                (product) => product.id !== id
            );
            setCarrinho(arrayFiltered);
        }

        // const filterCart = carrinho.filter(item => item.id !== id)
        //setCarrinho(filterCart)

    }

    return (
        <CartContext.Provider value={{ carrinho, setCarrinho, HandleAddCart, HandleRemoveCart }}>
            {children}
        </CartContext.Provider>
    );
}
