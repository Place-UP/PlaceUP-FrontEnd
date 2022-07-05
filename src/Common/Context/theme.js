import { createGlobalStyle } from "styled-components"

export const lightMode = {
    body: "#ECF0F1",
    fontColor: "#000",
    title: "#2980b9",
    cards: "#FFFFFF",
    barRight: "#fff",
    bar: "#2980B9",
}

export const darkMode = {
    body: "#2B2F38",
    fontColor: "#FFF",
    title: "#FFF",
    cards: "#393E4B",
    barRight: "#2D3E50",
    bar: "#2D3E50",
    icon: "#969FA8",
}
export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${props => props.theme.body};
    }
`

