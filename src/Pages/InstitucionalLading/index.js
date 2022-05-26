import React from "react";
import { Main, Banner, Cards, ContainerCard, Card } from "./style";
import { Link } from "react-router-dom";
import LogoBackground from "./img/LogoVector.svg";
import Logo from "./img/logo.svg";
import StyleBanner from "./img/StyleBanner.svg";
import VectorBanner from "./img/VectorBanner.svg";
import bottomshadow from "./img/bottomshadow.svg";


import { colors } from "../../mock/CardsInstitucional";
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

        {colors.map((item) => (
          <Cards>
            <Card key={item.id} primary={`0 10px 1px ${item.color}`}>
              <div>
                <img className="topimagecard" src={item.img} />
                <img className="bottomShadow" src={bottomshadow} />
              </div>
              <div className="ContainerTextCard">
                <h1>{item.title}</h1>
                <p>{item.Description}</p>
              </div>
            </Card>
          </Cards>
        ))}
      </ContainerCard>
    </Main>
  );
}
