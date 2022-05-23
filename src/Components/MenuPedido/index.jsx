import React from "react";
import './styles'
import supermarket from "./images/market.png";
import perfil from "./images/perfil.png";
import { IoIosExit } from "react-icons/io";
import { Section, Profile, DarkMode, Avaliacao, ProfileSugestao, } from "./styles";

export function MenuPedido() {
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

            <Avaliacao>
                <img src={supermarket} alt="Foto do Comerciante"></img>
                <h1>Pedido #0690590  - <span>CONCLUÍDO</span></h1>
                <p>25/04/2022 - 11:00h</p>
                <p>TOTAL - R$ 300,00</p>
                <ProfileSugestao>
                  <h2>Como foi sua experiência?</h2>
                  <textarea type="text" placeholder="Deixe seu depoimento..."></textarea>
                  <input type="submit"></input>
                </ProfileSugestao>                
            </Avaliacao>
          </div>  
      </Section>
    </>
  );
}