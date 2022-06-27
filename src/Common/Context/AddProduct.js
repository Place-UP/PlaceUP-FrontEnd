import { createContext, useEffect, useState } from "react";

export const CreateProduct = createContext({})

export const CreateProductContext = ({ children }) => {

    const [value, setValue] = useState(null)

    function handleAddProduct() {

    }

    function handleRemoveProduct() {

    }

    return (
        <CreateProduct.Provider value={{ handleAddProduct, handleRemoveProduct }}>
            {children}
        </CreateProduct.Provider>
    )
}