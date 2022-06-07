import { useRef } from "react";
import { box } from "../../mock/boxVisalizer";
import { Main, ContWhitePart } from "./style";
import { GrFormPrevious, GrFormNext, GrFormAdd } from "react-icons/gr";
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

            <p>Ver Todos</p>
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
                    <div>
                      <GrFormAdd className="AddIcon" />
                    </div>
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
