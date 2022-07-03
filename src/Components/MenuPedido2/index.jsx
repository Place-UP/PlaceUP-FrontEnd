import { React, useContext, useState } from "react";
import './styles'
import supermarket from "./images/market.png";
import perfil from "./images/perfil.png";
import { IoIosExit } from "react-icons/io";
import { Link } from "react-router-dom";
import { Section, Profile, DarkMode, ContainerCalendar, Evaluation, ProfileSuggestion } from "./styles";
import { ThemeContext } from "../../Common/Context/DarkThemeProvider";
import Calendar from 'react-calendar';
import { Bussines2 } from "../../mock/comercio2";


export function MenuPedido2() {

  function menuHamburger() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  const { themeToggle } = useContext(ThemeContext);  
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Section>
        <div className="mainMenu">
            <Profile>
              <div className="profile">                
                <Link to="/Perfil" className="link">
                <img src={perfil} alt="Foto de Perfil" />
                <h1>Rodolfo Martins</h1></Link>
                <IoIosExit className="iconExit"/>
              </div>
            </Profile>

            <DarkMode >
              <input id="toggle" class="toggle-control" type="checkbox" onClick={() => themeToggle()} />
              <label for="toggle"></label>
            </DarkMode>

            <ContainerCalendar>
                <Calendar onChange={onChange} value={value} className="calendar" />
            </ContainerCalendar>

            {Bussines2.map((item) => (
            <Evaluation>
              
                <img src={item.pefilimg} alt="Foto do Comerciante"></img>
                <h1>Pedido #0690590  - <span>PENDENTE</span></h1>
                <p>25/04/2022 - 11:00h</p>
                <p>TOTAL - R$ 300,00</p>
                <ProfileSuggestion>
                  <h2>Como foi sua experiência?</h2>
                  <textarea type="text" placeholder="Deixe seu depoimento..."></textarea>
                  <input type="submit"></input>
                </ProfileSuggestion>                
            </Evaluation>
            ))}  
        </div>  

          <div class="mobile">
          <nav class="navbar">
            <ul class="nav-menu">
              <li class="nav-item">
                  <Section>
                      <div className="mainMenu-Mobile">
                          <Profile>
                            <div className="profile">
                            <Link to="/Perfil" className="link">
                              <img src={perfil} alt="Foto de Perfil" />
                              <h1>Rodolfo Martins</h1></Link>
                              <IoIosExit className="iconExit"/>
                            </div>
                          </Profile>

                          <DarkMode>
                            <input id="toggle" class="toggle-control" type="checkbox" />
                            <label for="toggle"></label>
                          </DarkMode>

                          <ContainerCalendar>
                            <Calendar onChange={onChange} value={value} className="calendar" />
                          </ContainerCalendar>

                          {Bussines2.map((item) => (
                          <Evaluation>
                            
                              <img src={item.pefilimg} alt="Foto do Comerciante"></img>
                              <h1>Pedido #0690590  - <span>PENDENTE</span></h1>
                              <p>25/04/2022 - 11:00h</p>
                              <p>TOTAL - R$ 300,00</p>
                              <ProfileSuggestion>
                                <h2>Como foi sua experiência?</h2>
                                <textarea type="text" placeholder="Deixe seu depoimento..."></textarea>
                                <input type="submit"></input>
                              </ProfileSuggestion>                
                          </Evaluation>
                          ))}  

                          <div class="bottomContainer"></div>
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