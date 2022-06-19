import React from "react";
import {
  Main,
  Body,
  Photo,
  Inf,
  Locate,
  NameEdit,
  Inform,
  Sections,
} from "./style";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import Self from "./img/perfil.svg";
import { BiEdit } from "react-icons/bi";

export function Perfil() {
  return (
    <>
      <Header />
      <Main>
        <Body>
          <div className="Title">
            <p>Perfil</p>
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

                <div className="edit">
                  <p className="edit">EDITAR PERFIL</p>
                </div>
              </NameEdit>

              <Locate>
                <p>Rua Endereço Numero Bairro Cidade Estado</p>
              </Locate>
            </Inform>
          </Inf>

          <Sections>
            <details className="Informações">
              <summary> Sobre </summary> <br />
              <div className="InfoPessoal">
                <p>Informações Pessoal</p>
                <label>
                  Nome Do Usuário
                  <input type="text" />
                </label>
                <br />

                <label>
                  Email
                  <input type="email" />
                </label>
                <br />

                <label>
                  Data de Nascimento
                  <input type="date" />
                </label>
                <br />

                <label>
                  Senha
                  <input type="password" />
                </label>
                <br />
              </div>
            </details>

            <details className="Endereço">
              <summary> Endereço </summary>
              <div className="InfoLocal">
                <p>Informações De Endereço</p>
                <label>
                  Rua
                  <input type="text" />
                </label>
                <br />

                <label>
                  Numero
                  <input type="text" />
                </label>
                <br />

                <label>
                  Bairro
                  <input type="text" />
                </label>
                <br />

                <label>
                  Cidade
                  <input type="text" />
                </label>
                <br />

                <label>
                  CEP
                  <input type="number" />
                </label>
                <br />

                <div>
                  <label>
                    Região
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
            </details>
          </Sections>
        </Body>
      </Main>
    </>
  );
}
