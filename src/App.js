import "./reset.css";
import Rotas from "./Rotas";
import { DarkThemeProvider } from "./Common/Context/DarkThemeProvider";
import React from "react";

export default function App() {
  return (
    <DarkThemeProvider>
      <Rotas />
    </DarkThemeProvider>
  );
}
