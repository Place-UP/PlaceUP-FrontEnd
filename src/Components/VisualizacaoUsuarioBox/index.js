import { useRef, useContext, useEffect, useState } from "react";
import { Main, ContWhitePart } from "./style";
import { GrFormAdd } from "react-icons/gr";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { CartContext } from './../../Common/Context/index';
import axios from "axios";

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

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      let config = {
        method: 'get',
        url: 'http://localhost:8080/api/products?order=?',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZUBlbWFpbC5jb20iLCJleHAiOjE2NTY4OTQwNDl9.c6I-XgzCUNd-m65YVWlT4Mm4wreSdfim0f9IYTvaQvciFxcSvQA0FVfSSk_qEcpT5DixRaVk2b4H78_h0hwXdw'
        }
      };

      axios(config)
        .then(function (response) {
          setProducts(response.data)

        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getProducts();

  }, []);


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
        {products.map((item) =>
          <div className="ContainerCarousel" key={item.saller}>
            <div className="Carousel">

              <img className="image" src={item.imageLink} alt="img" />

              <button onClick={() => HandleAddCart({ ...item })}>
                <GrFormAdd className="AddIcon" />
              </button>
              <div className="Info">
                <span className="Tittle"> {item.description}</span>
                <div className="description">
                  <span className="Quant"> 400mg</span>
                  <span className="Price">R${item.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </ContWhitePart>
    </Main>

  );
}
