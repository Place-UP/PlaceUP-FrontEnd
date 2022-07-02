import React, { createContext, useContext, useEffect, useState } from "react";

export const CreateProduct = createContext({})
CreateProduct.displayName = "CreateProduct"

export const CreateProductContext = ({ children }) => {

    const [Nome, setNome] = useState('')
    const [Valor, setValor] = useState('')
    const [task, setTask] = useState([])
    const [error, setError] = useState(false)

    const [selectImage, setSelectImage] = useState()
    const [endImg] = useState('https://cdn-icons-png.flaticon.com/512/685/685655.png')

    useEffect(() => {
        const task = JSON.parse(localStorage.getItem('task'))
        if (task) {
            setTask(task)
        }
    })

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectImage(e.target.files[0])
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()

        if (Nome.length == 0 || Valor.length == 0) {
            setError(true)
        } else {
            const idRandom = (num) => Math.floor(Math.random() * num)

            const newTask = { id: idRandom(1200), name: Nome, valor: Valor, img: selectImage, isComple: false }
            task.push(newTask)

            setTask(task)
            localStorage.setItem("task", JSON.stringify(task))

            setNome('')
            setValor('')

            console.log(task)
        }
    }




    return (
        <CreateProduct.Provider value={{ handleSubmit, error, setError, task, setTask, Valor, setValor, Nome, setNome, setSelectImage, selectImage, imageChange, endImg }}>
            {children}
        </CreateProduct.Provider>
    )
}

export function useProducts() {
    return useContext(CreateProduct)
}