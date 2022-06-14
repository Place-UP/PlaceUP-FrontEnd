import { useRef, useContext, useState } from "react";
import { box } from "../../mock/boxVisalizer";
import { Main, ContWhitePart } from "./style";
import { GrFormAdd } from "react-icons/gr";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { CartContext } from './../../Common/Context/index';




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

  const { HandleAddCart } = useContext(CartContext)

  return (
    <Main>
      <div className="Offers">
        <h1>Ofertas</h1>
        <div className="FunctionCarousel">
          <div>
            <button onClick={handleLeftClick}>
              <MdOutlineKeyboardArrowLeft className="scrollLeft" />
            </button>
            <button onClick={handleRightClick}>
              <MdOutlineKeyboardArrowRight className="scrollRight" />
            </button>
          </div>
        </div>
      </div>
      <ContWhitePart className="carousel" ref={carousel}>
        {box.map((item) => {
          const { id, name, price, oldPrice, image } = item;
          return (
            <div className="ContainerCarousel" key={id}>
              <div className="Carousel">
                <div className="containerIMG">
                  <img className="image" src={image} alt="img" />
                  <button onClick={() => HandleAddCart({ ...item })}>
                    <GrFormAdd className="AddIcon" />
                  </button>
                </div>
                <div className="Info">
                  <span className="Tittle"> {name}</span>
                  <span className="Quant"> 400mg</span>
                  <div className="SeparationPrices">
                    <span className="OldPrice"> {oldPrice}</span>
                    <span className="Price">{price}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ContWhitePart>
    </Main>

  );
}
