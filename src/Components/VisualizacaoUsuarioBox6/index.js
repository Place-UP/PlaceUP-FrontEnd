import { useRef, useContext } from "react";
import { Main, ContWhitePart } from "./style";
import { GrFormAdd } from "react-icons/gr";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { comercio6 } from "../../mock/comercio6";
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
        {comercio6.map((item) => (
          <div className="ContainerCarousel" key={item.id}>
            <div className="Carousel">
              <img className="image" src={item.image} alt="img" />
              <button onClick={() => HandleAddCart({ ...item })}>
                <GrFormAdd className="AddIcon" />
              </button>
              <div className="Info">
                <span className="Tittle"> {item.name}</span>
                <div className="description">
                  <span className="Quant"> 400mg</span>
                  <span className="Price">R${item.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ContWhitePart>
    </Main>

  );
}
