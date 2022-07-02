import { HeaderComerciante } from "../../Components/HeaderComerciantes/HeaderComerciante";
import { MenuPrincipal } from "../../Components/NavVisualizacaoComerciante/index";
import { Main } from "./style";
import { AiOutlineUpload } from "react-icons/ai";
import { TextField } from "@mui/material";
import { useState } from 'react';
import { useProducts } from "../../Common/Context/AddProduct";


export function AddProduct() {

  const { handleSubmit, error, setError, task, setTask, Valor, setValor, Nome, setNome, setSelectImage, selectImage, imageChange, endImg } = useProducts()

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
              <form className="putImage" >
                {selectImage ? (
                  <img src={URL.createObjectURL(selectImage)} />
                ) : (
                  <img className="ImgFiles" src={endImg} alt="Sem imagem" />
                )}
                <label for="arquivo">
                  <AiOutlineUpload className="icon-upload" />
                  <p>Enviar arquivo</p>
                </label>
                <input type="file" name="arquivo" id="arquivo" onChange={imageChange} accept="image/*" />
              </form>
              <div className="informationProduct" >
                <TextField id="filled-basic" label="Nome" variant="filled" value={Nome} className={Nome.length > 0 ? "active" : ""} onChange={(e) => setNome(e.target.value)} />
                {error && Nome.length <= 0 ? (
                  <p className="never">Campo invalido</p>
                ) : ""}
                <TextField type="number" id="filled-basic" label="Valor" variant="filled" value={Valor} className={Valor.length > 0 ? "active" : ""} onChange={(e) => setValor(e.target.value)} />
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

