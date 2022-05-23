import React from "react";
import { Main } from "./style";
import { Link } from "react-router-dom";
import LogoBackground from "./img/LogoVector.svg";
import Logo from "./img/logo.svg";

export function Institucional() {
  return (
    <Main>
      <header>
        <img
          className="logoBackground"
          src={LogoBackground}
          alt="logoBackground"
        />
        <Link to="">
          <img className="logomob" src={Logo} alt="logoBackground" />
        </Link>
        <div>
          <Link to="">
            <span>PlaceUP</span>
          </Link>
        </div>
      </header>
    </Main>
  );
}
