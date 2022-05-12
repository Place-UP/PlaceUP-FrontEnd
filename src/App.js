import React from "react";
<<<<<<< HEAD

import Rotas from "./Rotas";

function App() {
  return <Rotas />

=======
import "./App.css";
import Rotas from "./routes.js";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>);
>>>>>>> 96fc30cc9ed439e0a9a55fcca069986a965ef882
}


