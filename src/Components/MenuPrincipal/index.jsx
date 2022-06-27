import { React, useContext } from "react";
import './styles'
import perfil from "./images/perfil.png";
import { IoIosExit } from "react-icons/io";
import { Section, Profile, DarkMode, Suggestions, ProfileSuggestions } from "./styles";
import { ThemeContext } from "../../Common/Context/DarkThemeProvider";

export function MenuPrincipal() {

  function menuHamburger() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  const { themeToggle } = useContext(ThemeContext)

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

            <DarkMode >
              <input id="toggle" class="toggle-control" type="checkbox" onClick={() => themeToggle()} />
              <label for="toggle"></label>
            </DarkMode>

            <Suggestions>
              <h1>SUGESTÕES</h1>
              <ProfileSuggestions>
                <img src={perfil} alt="Foto de Perfil" />
                <h2>Name Market</h2>
              </ProfileSuggestions>

              <ProfileSuggestions>
                <img src={perfil} alt="Foto de Perfil" />
                <h2>Name Market</h2>
              </ProfileSuggestions>

              <ProfileSuggestions>
                <img src={perfil} alt="Foto de Perfil" />
                <h2>Name Market</h2>
              </ProfileSuggestions>

              <ProfileSuggestions>
                <img src={perfil} alt="Foto de Perfil" />
                <h2>Name Market</h2>
              </ProfileSuggestions>

              <ProfileSuggestions>
                <img src={perfil} alt="Foto de Perfil" />
                <h2>Name Market</h2>
              </ProfileSuggestions>              
          </Suggestions>
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
                            <Suggestions>
                                <h1>SUGESTÕES</h1>
                                <ProfileSuggestions>
                                  <img src={perfil} alt="Foto de Perfil" />
                                  <h2>Name Market</h2>
                                </ProfileSuggestions>

                                <ProfileSuggestions>
                                  <img src={perfil} alt="Foto de Perfil" />
                                  <h2>Name Market</h2>
                                </ProfileSuggestions>

                                <ProfileSuggestions>
                                  <img src={perfil} alt="Foto de Perfil" />
                                  <h2>Name Market</h2>
                                </ProfileSuggestions>

                                <ProfileSuggestions>
                                  <img src={perfil} alt="Foto de Perfil" />
                                  <h2>Name Market</h2>
                                </ProfileSuggestions>

                                <ProfileSuggestions>
                                  <img src={perfil} alt="Foto de Perfil" />
                                  <h2>Name Market</h2>
                                </ProfileSuggestions>
                                
                            </Suggestions>
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