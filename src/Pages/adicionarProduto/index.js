import { HeaderComerciante } from "../../Components/HeaderComerciantes/HeaderComerciante";
import { MenuPrincipal } from "../../Components/NavVisualizacaoComerciante/index";
import { Main } from "./style";
import { AiOutlineUpload, AiOutlineCamera } from "react-icons/ai";
import { TextField } from "@mui/material";
import { useState } from 'react';


export function AddProduct() {

  const [Nome, setNome] = useState('')
  const [Marca, setMarca] = useState('')
  const [Categoria, setCategoria] = useState('')
  const [Peso, setPeso] = useState('')
  const [Valor, setValor] = useState('')
  const [error, setError] = useState(false)

  const [selectImage, setSelectImage] = useState()
  const [endImg] = useState('https://cdn-icons-png.flaticon.com/512/685/685655.png')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (Nome.length == 0 || Marca.length == 0 || Categoria.length == 0 || Peso.length == 0 || Valor.length == 0) {
      setError(true)
    }
    console.log(Nome)
  }

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectImage(e.target.files[0])
    }
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
              <form className="putImage" onSubmit={submit}>
                {selectImage ? (
                  <img src={URL.createObjectURL(selectImage)} />
                ) : (
                  <img src={endImg} alt="Sem imagem" />
                )}
                <label for="arquivo">
                  <AiOutlineUpload className="icon-upload" />
                  <p>Enviar arquivo</p>
                </label>
                <input type="file" name="arquivo" id="arquivo" onChange={imageChange} accept="image/*" />
              </form>
              <div className="informationProduct" >
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
                <TextField type="number" id="filled-basic" label="Valor" variant="filled" className={Valor.length > 0 ? "active" : ""} onChange={(e) => setValor(e.target.value)} />
                {error && Valor.length <= 0 ? (
                  <p className="never">Campo invalido</p>
                ) : ""}
                <input type="submit" value="Enviar" onClick={handleSubmit} />
              </div>
            </div>
            <div className="description">
              <p>Descrição do produto:</p>
              <div>
                <input
                  type="text"
                  placeholder="Adicione a descrisão do seu produto..."
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
