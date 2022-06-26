import { HeaderComerciante } from "../../Components/HeaderComerciantes/HeaderComerciante";
import { MenuPrincipal } from "../../Components/NavVisualizacaoComerciante/index";
import { Main } from "./style";
import { AiOutlineUpload } from "react-icons/ai";
import { TextField } from "@mui/material";
export function AddProduct() {
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
              <div className="informationProduct">
                <TextField id="filled-basic" label="Nome" variant="filled" />
                <TextField id="filled-basic" label="Marca" variant="filled" />
                <TextField id="filled-basic" label="Categoria" variant="filled" />
                <TextField id="filled-basic" label="Peso" variant="filled" />
                <TextField id="filled-basic" label="Valor" variant="filled" />
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
