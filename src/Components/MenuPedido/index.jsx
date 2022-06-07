import React from "react";
import './styles'
import supermarket from "./images/market.png";
import perfil from "./images/perfil.png";
import { IoIosExit } from "react-icons/io";
import { Section, Profile, DarkMode, Evaluation, ProfileSuggestion } from "./styles";

export function MenuPedido() {

  function menuHamburger() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  return (
    <>
      <Section>
        <div className="mainMenu">
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

            <Evaluation>
                <img src={supermarket} alt="Foto do Comerciante"></img>
                <h1>Pedido #0690590  - <span>CONCLUÍDO</span></h1>
                <p>25/04/2022 - 11:00h</p>
                <p>TOTAL - R$ 300,00</p>
                <ProfileSuggestion>
                  <h2>Como foi sua experiência?</h2>
                  <textarea type="text" placeholder="Deixe seu depoimento..."></textarea>
                  <input type="submit"></input>
                </ProfileSuggestion>                
            </Evaluation>
          </div>  

          <div class="mobile">
          <nav class="navbar">
            <ul class="nav-menu">
              <li class="nav-item">
                  <Section>
                      <div className="mainMenu-Mobile">
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

                          <Evaluation>
                              <img src={supermarket} alt="Foto do Comerciante"></img>
                              <h1>Pedido #0690590  - <span>CONCLUÍDO</span></h1>
                              <p>25/04/2022 - 11:00h</p>
                              <p>TOTAL - R$ 300,00</p>
                              <ProfileSuggestion>
                                <h2>Como foi sua experiência?</h2>
                                <textarea type="text" placeholder="Deixe seu depoimento..."></textarea>
                                <input type="submit"></input>
                              </ProfileSuggestion>                
                          </Evaluation>
                      </div>  
                  </Section>
              </li>
            </ul>

            <button onClick={menuHamburger}>
              <div class="hamburger" id="menuHamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </div>     
            </button>                                         
          </nav>   
        </div>   
      </Section>
    </>
  );
}