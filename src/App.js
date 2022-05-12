import React from "react";
import "./App.css";
import Rotas from "./routes.js";
import {BrowserRouter} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
}

