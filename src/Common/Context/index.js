import React, { createContext, useState } from 'react'

export const CartContext = createContext({});
CartContext.displayName = "Carrinho"

export const CartContextProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    function HandleAddCart(id) {
        const copyProduct = [...carrinho]

        const item = copyProduct.find((product) => product.id === id)

        if (!item) {
            copyProduct.push({ id: id, qtd: 1 })
        } else {
            item.qtd += 1
        }

        setCarrinho(copyProduct)
    }

    function HandleRemoveCart(id) {
        const copyProduct = [...carrinho]

        const item = copyProduct.find((product) => product.id === id)

        if (item.qtd > 1) {
            item.qtd -= 1
            setCarrinho(copyProduct)
        } else {
            const arrayFiltered = copyProduct.filter(product => product.id !== id)
            setCarrinho(arrayFiltered)
        }


    }

    return (
        <CartContext.Provider value={{ carrinho, setCarrinho, HandleAddCart, HandleRemoveCart }}>
            {children}
        </CartContext.Provider>
    );
}
