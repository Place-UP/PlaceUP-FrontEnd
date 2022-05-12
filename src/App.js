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


