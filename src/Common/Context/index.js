import React, { createContext, useState } from 'react'


export const CartContext = createContext({});
CartContext.displayName = "Carrinho"

export const CartContextProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    function HandleAddCart({ id, name, price, oldPrice, image }) {
        const copyProduct = [...carrinho]
        console.log(carrinho)
        const item = copyProduct.find((product) => product.id === id)

        if (!item) {
            copyProduct.push({ id, name, price, oldPrice, image, qtd: 1 })
            console.log(copyProduct)
        } else {
            item.qtd += 1
        }

        setCarrinho(copyProduct)
        console.log(carrinho)
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
