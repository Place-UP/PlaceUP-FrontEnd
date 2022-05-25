import React from "react";
import { Main, Banner, Cards, ContainerCard } from "./style";
import { Link } from "react-router-dom";
import LogoBackground from "./img/LogoVector.svg";
import Logo from "./img/logo.svg";
import StyleBanner from "./img/StyleBanner.svg";
import VectorBanner from "./img/VectorBanner.svg";
import bottomshadow from "./img/bottomshadow.svg";
import { Colors } from "../../mock/infoCards";
export function Institucional(Props) {
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
      <Banner>
        <div>
          <h1>
            <span>PlaceUP</span> <br></br> A empresa que está sempre com você!
          </h1>
          <img className="imgvectorBanner" src={StyleBanner} />
        </div>
        <img className="imgvectorBanner" src={VectorBanner} />
      </Banner>
      <ContainerCard>
        {Colors.map((item) => {
          <Cards key={item.id} primary={`0px 10px 0px 0px ${item.color}`}>
            <div className="ContainerCard">
              <div>
                <img className="topimagecard" src={item.img} />
                <img className="bottomShadow" src={bottomshadow} />
              </div>
              <div className="ContainerTextCard">
                <h1>{item.tittle}</h1>
                <p>{item.Description}</p>
              </div>
            </div>
          </Cards>;
        })}
      </ContainerCard>
    </Main>
  );
}
