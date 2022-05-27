import React from "react";
import './styles'
import perfil from "./images/perfil.png";
import { IoIosExit } from "react-icons/io";
import { Section, Profile, DarkMode, Sugestoes, ProfileSugestao, } from "./styles";

export function MenuPrincipal() {  
  
  function menuHamburger() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

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

        <div class="mobile">
          <nav class="navbar">
            <ul class="nav-menu">
              <li class="nav-item">
                  <Section>
                      <div className="menuPrincipal2">
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