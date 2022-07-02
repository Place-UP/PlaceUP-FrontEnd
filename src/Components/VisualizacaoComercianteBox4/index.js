import { useEffect, useRef, useState } from "react";
import { box } from "../../mock/boxVisalizer";
import { Main, ContWhitePart } from "./style";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useProducts } from '../../Common/Context/AddProduct';
import { axios } from 'axios';
import { comercio4 } from "../../mock/comercio4";

export function Box() {

  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };


  const { task } = useProducts()
  const coppyArray = [...task, ...box]

  return (
    <>
      <Main>
        <div className="Offers">
          <h1>Ofertas</h1>

          <div className="FunctionCarousel">
            <div>
              <button onClick={handleLeftClick}>
                <MdKeyboardArrowLeft className="scrollLeft" />
              </button>
              <button onClick={handleRightClick}>
                <MdKeyboardArrowRight className="scrollRight" />
              </button>
            </div>
          </div>
        </div>
        <ContWhitePart className="carousel" ref={carousel}>
          {comercio4.map((item) => (            
              <div className="ContainerCarousel" key={item.id}>
                <div className="Carousel">
                  <div className="containerIMG">
                    <img className="image" src={item.img} alt="img" />
                  </div>
                  <div className="Info">
                    <span className="Tittle"> {item.name}</span>
                    <span className="Quant"> 400mg</span>
                    <div className="SeparationPrices">
                      <span className="Price">{item.price}</span>
                    </div>
                  </div>
                </div>
              </div>            
          ))}
        </ContWhitePart>
      </Main>
    </>
  );
}
