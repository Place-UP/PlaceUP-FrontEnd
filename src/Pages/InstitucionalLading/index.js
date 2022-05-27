import React from "react";
import { Main, Banner, Cards, ContainerCard, Card, Hystory } from "./style";
import { Link } from "react-router-dom";
import LogoBackground from "./img/LogoVector.svg";
import Logo from "./img/logo.svg";
import StyleBanner from "./img/StyleBanner.svg";
import VectorBanner from "./img/VectorBanner.svg";
import bottomshadow from "./img/bottomshadow.svg";
import TableFounders from "../../Components/FoundersTable/index";
import VectorOurHistory from "./img/VectorOurHistory.svg";
import { colors } from "../../mock/CardsInstitucional";
import { FooterGeral } from "../../Components/FooterGeral/footer";
export function Institucional() {
  return (
    <>
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
        <TableFounders />
        <Hystory>
          <div className="title">
            <h1>História</h1>
            <hr />
          </div>
          <p>
            A Place Up foi fundada em 2022, pelo grupo NightCode composto por 8
            estudantes do Instituto Proa que estavam empenhados em criar uma
            empresa que ajudasse os comerciantes locais.
          </p>
          <img className="OurHistories" src={VectorOurHistory} alt=".." />
        </Hystory>
      </Main>
      <FooterGeral />
    </>
  );
}
