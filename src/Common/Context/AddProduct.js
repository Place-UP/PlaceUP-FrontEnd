import { createContext, useEffect, useState } from "react";


export const CreateProduct = createContext({})

export const CreateProductContext = ({ children }) => {

    function handleAddProduct() {

    }

    function handleRemoveProduct() {

    }

    return (
        <CreateProduct.Provider>
            {children}
        </CreateProduct.Provider>
    )
}