import { useRef } from "react";
import { box } from "../../mock/boxVisalizer";
import { Main, ContWhitePart } from "./style";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

import { useContext } from 'react'
import { CartContext } from '../../Common/Context/index'



export function Box() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://localhost:3000/static/shoes.json")
  //     .then((response) => response.json())
  //     .then(setData);
  // }, []);

  // if (!data || !data.length) return null;
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const { produto, setProduto, valor, setValor } = useContext(CartContext);

  return (
    <>
      <Main>
        <div className="Offers">
          <h1>Ofertas</h1>

          <div className="FunctionCarousel">
            <div>
              <button onClick={handleLeftClick}>
                <GrFormPrevious className="scrollLeft" />
              </button>
              <button onClick={handleRightClick}>
                <GrFormNext className="scrollRight" />
              </button>
            </div>
          </div>
        </div>
        <ContWhitePart className="carousel" ref={carousel}>
          {box.map((item) => {
            const { name, price, oldPrice, image } = item;
            return (
              <div className="ContainerCarousel">
                <div className="Carousel">
                  <div className="containerIMG">
                    <img className="image" src={image} alt="img" />
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
    </>
  );
}
