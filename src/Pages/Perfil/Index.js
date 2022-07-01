import React, { useState } from "react";
import {
  Main,
  Body,
  Photo,
  Inf,
  Locate,
  NameEdit,
  Inform,
  Sections,
  Buttons,
} from "./style";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import Self from "./img/perfil.svg";


export function Perfil() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header />
      <Main>
        <Body>
          <div className="Title">
            <p>PERFIL</p>
          </div>

          <Inf>
            <Photo>
              <img src={Self} alt="Foto de Perfil Do Usuário" />
            </Photo>

            <Inform>
              <NameEdit>
                <div>
                  <p className="name">UserName</p>
                </div>

                <div>
                  <p className="edit">EDITAR PERFIL</p>
                </div>
              </NameEdit>

              <Locate>
                <p>Rua Endereço Numero Bairro Cidade Estado</p>
              </Locate>
            </Inform>
          </Inf>

          <Buttons>
            <button  className={`sobre ${isOpen ? "corBtn" : ""}`} onClick={() => setIsOpen(!isOpen)}>Sobre</button>
            <button  className={`informacao ${isOpen ? "" : "corBtn"}`} onClick={() => setIsOpen(!isOpen)}>Informações</button>
          </Buttons>

          <Sections>
            <div className={`Informações ${isOpen ? "active" : "none"}`}>
              <div id="sobre" className="InfoPessoal">
                <p className="A">Informações Pessoais</p>
                <label>
                  Nome Do Usuário:
                  <input type="text" placeholder="UserName" />
                </label>
                <br />

                <label>
                  Email:
                  <input type="email" placeholder="name@gmail.com" />
                </label>
                <br />

                <label>
                  Data de Nascimento:
                  <input type="date" placeholder="data de nascimento" />
                </label>
                <br />

                <label>
                  Senha:
                  <input type="password" placeholder="*********" />
                </label>
                <br />

                <label>
                  Confirme Senha:
                  <input type="password" placeholder="*********" />
                </label>
                <br />
              </div>
              <button class="button">
                <span>Salvar</span>
              </button>
            </div>


            <div className={`Endereço ${isOpen ? "none" : "active"}`}>
              <div className="InfoLocal">
                <p className="B">Informações De Endereço</p>
                <label>
                  Rua:
                  <input type="text" placeholder="Nome da Rua" />
                </label>
                <br />

                <label>
                  Numero:
                  <input type="text" placeholder="Numero" />
                </label>
                <br />

                <label>
                  Bairro:
                  <input type="text" placeholder="Nome do Bairro" />
                </label>
                <br />

                <label>
                  Cidade:
                  <input type="text" placeholder="Nome da cidade" />
                </label>
                <br />

                <label>
                  CEP:
                  <input type="number" placeholder="Numero do cep" />
                </label>
                <br />

                <div className="regiao">
                  <label className="regiãoselect">
                    Região:
                    <select>
                      <option value=""></option>
                      <option value="Centro">Centro</option>
                      <option value="Zona Norte">Zona Norte</option>
                      <option value="Zona Leste">Zona Leste</option>
                      <option value="Zona Sul">Zona Sul</option>
                      <option value="Zona Oeste">Zona Oeste</option>
                    </select>
                  </label>
                </div>
              </div>

              <button class="button">
                <span>Salvar</span>
              </button>
            </div>
          </Sections>
        </Body>

      </Main>
    </>
  );
}
