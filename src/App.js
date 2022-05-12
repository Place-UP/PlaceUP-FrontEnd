<<<<<<< HEAD
import React from "react";
import "./App.css";
import Rotas from "./routes.js";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/FooterGeral/footer";

export default function App() {
  return (
    <BrowserRouter>
      <Rotas />

      <Footer />
    </BrowserRouter>    
    );
  }
=======
import './reset.css'
import Rotas from "./Rotas";

export default function App() {
  return (
    <Rotas />
  )
}
>>>>>>> 71df9cbb3f8a4fbf4e90a7d48a6fc5424c3bbc03


