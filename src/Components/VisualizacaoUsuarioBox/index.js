import { useRef, useContext } from "react";
import { box } from "../../mock/boxVisalizer";
import { Main, ContWhitePart } from "./style";
import { GrFormPrevious, GrFormNext, GrFormAdd } from "react-icons/gr";
import { CartContext } from './../../Common/Context/index';
import { Carrinho } from './../BarraDePesquisa/style';


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

  const { HandleAddCart, HandleRemoveCart, carrinho } = useContext(CartContext)

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
            const { id, name, price, oldPrice, image } = item;
            return (
              <div className="ContainerCarousel" key={id}>
                <div className="Carousel">
                  <div className="containerIMG">
                    <img className="image" src={image} alt="img" />
                    <button onClick={() => HandleAddCart({ ...item })}>
                      <GrFormAdd className="AddIcon" />
                    </button>
                    <button onClick={() => HandleRemoveCart(id)}>
                      <GrFormAdd className="DeleteIcon" />
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
    </>
  );
}
