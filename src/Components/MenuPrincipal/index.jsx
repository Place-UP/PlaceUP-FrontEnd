import React from "react";
import './styles'
import perfil from "./images/perfil.png";
import { IoIosExit } from "react-icons/io";
import { Section, Profile, DarkMode, Reserva, Sugestoes, ProfileSugestao, } from "./styles";

export function MenuPrincipal() {
  return (
    <>
      <Section>
        <div className="menuPrincipal">
            <Profile>
              <div className="profile">
                <img src={perfil} alt="Foto de Perfil" />
                <h1>Name User</h1>
                <IoIosExit className="iconExit"/>
              </div>
            </Profile>

            <DarkMode>
              <input id="toggle" class="toggle-control" type="checkbox" />
              <label for="toggle"></label>
            </DarkMode>

            <Reserva>
              <div>
                <h1>Reserva</h1>
              </div>
            </Reserva>

            <Sugestoes>
                <h1>SUGESTÕES</h1>
                <ProfileSugestao>
                  <img src={perfil} alt="Foto de Perfil" />
                  <h2>Name Market</h2>
                </ProfileSugestao>

                <ProfileSugestao>
                  <img src={perfil} alt="Foto de Perfil" />
                  <h2>Name Market</h2>
                </ProfileSugestao>

                <ProfileSugestao>
                  <img src={perfil} alt="Foto de Perfil" />
                  <h2>Name Market</h2>
                </ProfileSugestao>

                <ProfileSugestao>
                  <img src={perfil} alt="Foto de Perfil" />
                  <h2>Name Market</h2>
                </ProfileSugestao>

                <ProfileSugestao>
                  <img src={perfil} alt="Foto de Perfil" />
                  <h2>Name Market</h2>
                </ProfileSugestao>
                
            </Sugestoes>
          </div>  
      </Section>
    </>
  );
}
