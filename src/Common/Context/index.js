import { createContext } from 'react'
import { useState } from 'react'
import { set } from 'react-hook-form';

export const CartContext = createContext({});
CartContext.displayName = "Carrinho"

export const CartContextProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    function HandleAddCart(item) {
        setCarrinho([...carrinho, item])
    }

    function HandleRemoveCart(id) {
        const filterCart = carrinho.filter(item => item.id !== id)
        setCarrinho(filterCart)
    }

    return (
        <CartContext.Provider value={{ carrinho, setCarrinho, HandleAddCart, HandleRemoveCart }}>
            {children}
        </CartContext.Provider>
    );
}
