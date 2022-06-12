import React from "react";
import "./styles";
import perfil from "./images/perfil.png";
import logoPlace from "./images/LogoPlace.svg";
import { FaWheelchair } from "react-icons/fa";
import { IoIosExit } from "react-icons/io";
import { AiOutlineClockCircle, AiOutlineStar } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";
import { Section, Profile, DarkMode } from "./styles";

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
        <div className="mainMenu">
          <div className="ContainerPlace">
            <div className="PlaceArea">
              <img className="ImageLogoPlace" src={logoPlace} alt=".." />
              <h1>Buteco de minas</h1>
            </div>
            <div>
              <div className="WorkTimePlace DefaulConfig">
                <AiOutlineClockCircle className="IconMenu" />
                <p> Aberto das 8h/18h</p>
              </div>
              <div className="Avaliation DefaulConfig">
                <span>4,4</span>
                <div className="ImageStars">
                  <AiOutlineStar className="IconMenu " />
                  <AiOutlineStar className="IconMenu " />
                  <AiOutlineStar className="IconMenu " />
                  <AiOutlineStar className="IconMenu " />
                  <AiOutlineStar className="IconMenu " />
                </div>
              </div>
              <div className="Location DefaulConfig">
                <MdOutlinePlace className="IconMenu" />
                <p> Endereco do restaurante</p>
              </div>
              <div className="Acessible DefaulConfig">
                <FaWheelchair className="IconMenu" />
                <p> Acessivel</p>
              </div>

              <div className="ContainerCorredor">
                <h1 className="TitleCorredores">Corredores</h1>

                <div className="SectionPlace">
                  <div>
                    <span>Snacks</span>
                    <span>Limpeza</span>
                    <span>Açougue</span>
                    <span>Bebidas(+18)</span>
                    <span>Snacks</span>
                    <span>Limpeza</span>
                    <span>Açougue</span>
                    <span>Bebidas(+18)</span>
                    <span>Snacks</span>
                    <span>Limpeza</span>
                    <span>Açougue</span>
                    <span>Bebidas(+18)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile">
          <nav class="navbar">
            <ul class="nav-menu">
              <li class="nav-item">
                <Section>
                  <div className="mainMenu-Mobile">
                    <div className="ContainerPlace">
                      <div className="PlaceArea">
                        <img
                          className="ImageLogoPlace"
                          src={logoPlace}
                          alt=".."
                        />
                        <h1>Buteco de minas</h1>
                      </div>
                      <div>
                        <div className="WorkTimePlace DefaulConfig">
                          <AiOutlineClockCircle className="IconMenu" />
                          <p> Aberto das 8h/18h</p>
                        </div>
                        <div className="Avaliation DefaulConfig">
                          <span>4,4</span>
                          <div className="ImageStars">
                            <AiOutlineStar className="IconMenu " />
                            <AiOutlineStar className="IconMenu " />
                            <AiOutlineStar className="IconMenu " />
                            <AiOutlineStar className="IconMenu " />
                            <AiOutlineStar className="IconMenu " />
                          </div>
                        </div>
                        <div className="Location DefaulConfig">
                          <MdOutlinePlace className="IconMenu" />
                          <p> Endereco do restaurante</p>
                        </div>
                        <div className="Acessible DefaulConfig">
                          <FaWheelchair className="IconMenu" />
                          <p> Acessivel</p>
                        </div>

                        <div className="ContainerCorredor">
                          <h1 className="TitleCorredores">Corredores</h1>

                          <div className="SectionPlace">
                            <div>
                              <span>Snacks</span>
                              <span>Limpeza</span>
                              <span>Açougue</span>
                              <span>Bebidas(+18)</span>
                              <span>Snacks</span>
                              <span>Limpeza</span>
                              <span>Açougue</span>
                              <span>Bebidas(+18)</span>
                              <span>Snacks</span>
                              <span>Limpeza</span>
                              <span>Açougue</span>
                              <span>Bebidas(+18)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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