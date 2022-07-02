import { React, useContext } from "react";
import './styles'
import { DarkMode } from "./styles";
import { ThemeContext } from "../../Common/Context/DarkThemeProvider";

export function InputDarkMode() {

  const { themeToggle } = useContext(ThemeContext)

  return (
    <>
            <DarkMode >
              <input id="toggle" class="toggle-control" type="checkbox" onClick={() => themeToggle()} />
              <label for="toggle"></label>
            </DarkMode>       
    </>
  );
}