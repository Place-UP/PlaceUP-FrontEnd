import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import React from "react";
import { lightMode, darkMode } from './theme'

export const ThemeContext = createContext({})

export const DarkThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "light")
    //const [theme, setTheme] = useState("light"))

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme]);


    function themeToggle() {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, themeToggle }}>
            <ThemeProvider theme={theme === "light" ? lightMode : darkMode}>
                {children}
            </ThemeProvider >
        </ThemeContext.Provider>
    )
}