import { HeaderComerciante } from "../../Components/HeaderComerciantes/HeaderComerciante";
import { MenuPrincipal } from "../../Components/NavVisualizacaoComerciante/index";
import { Main } from "./style";
import { AiOutlineUpload } from "react-icons/ai";
import { TextField } from "@mui/material";
import { useState } from 'react';


export function AddProduct() {

  const [Nome, setNome] = useState('')
  const [Marca, setMarca] = useState('')
  const [Categoria, setCategoria] = useState('')
  const [Peso, setPeso] = useState('')
  const [Valor, setValor] = useState('')
  const [error, setError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()

    if (Nome.length == 0 || Marca.length == 0 || Categoria.length == 0 || Peso.length == 0 || Valor.length == 0) {
      setError(true)
    }
    console.log(Nome)
  }

  return (

    <>
      <HeaderComerciante />
      <Main>
        <div className="Container1">
          <div className="title">
            <h1>Adicionar Produto</h1>
            <hr className="hrs" />
          </div>

          <div className="whitePart">
            <div className="contIntoArea">
              <div className="putImage">
                <label for="arquivo">
                  <AiOutlineUpload className="icon-upload" />
                  <p>Enviar arquivo</p>
                </label>
                <input type="file" name="arquivo" id="arquivo" />
              </div>

              <form className="informationProduct" onSubmit={handleSubmit} >
                <TextField id="filled-basic" label="Nome" variant="filled" className={Nome.length > 0 ? "active" : ""} onChange={(e) => setNome(e.target.value)} />
                {error && Nome.length <= 0 ? (
                  <p className="never">Campo invalido</p>
                ) : ""}
                <TextField id="filled-basic" label="Marca" variant="filled" className={Marca.length > 0 ? "active" : ""} onChange={(e) => setMarca(e.target.value)} />
                {error && Marca.length <= 0 ? (
                  <p className="never">Campo invalido</p>
                ) : ""}
                <TextField id="filled-basic" label="Categoria" variant="filled" className={Categoria.length > 0 ? "active" : ""} onChange={(e) => setCategoria(e.target.value)} />
                {error && Categoria.length <= 0 ? (
                  <p className="never">Campo invalido</p>
                ) : ""}
                <TextField id="filled-basic" label="Peso" variant="filled" className={Peso.length > 0 ? "active" : ""} onChange={(e) => setPeso(e.target.value)} />
                {error && Peso.length <= 0 ? (
                  <p className="never">Campo invalido</p>
                ) : ""}
                <TextField id="filled-basic" label="Valor" variant="filled" className={Valor.length > 0 ? "active" : ""} onChange={(e) => setValor(e.target.value)} />
                {error && Valor.length <= 0 ? (
                  <p className="never">Campo invalido</p>
                ) : ""}
                <input type="submit" value="Enviar" />
              </form>
            </div>
            <div className="description">
              <p>Descrição do produto:</p>
              <div>
                <input
                  type="text"
                  placeholder="Adicione a descrisão do seu produto..."
                  className="description"
               />
              </div>
            </div>
          </div>
        </div>
        <div class="Container2">
          <MenuPrincipal />
        </div>
      </Main>
    </>
  );
}

