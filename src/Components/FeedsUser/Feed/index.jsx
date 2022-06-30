import { useState, useEffect } from "react";
import './styles'
import supermarket from "./images/market.png";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Feed, Profile, ContainerProfile, Button, Product, CointanerProduct } from "./styles";
import axios from "axios";

export function FeedUser() {

    const [ product, setProducts] = useState([]);
    useEffect(() => {
    async function getProducts() {
    let config = {
      method: 'get',
      url: 'http://localhost:8080/api/products?order=?',
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZUBlbWFpbC5jb20iLCJleHAiOjE2NTY5MTA1OTd9.6wTMQ3n7p3LeHpGw3mkVT5YfkLsT5kAOq9wOM8AMWE-W1wUII5hG93m1_N6LUZiOl1ttjh8bD_C-B3DxT0FmdA"
      },      
    };

    axios(config)
    .then(function (response) { setProducts(response.data); })
    .catch(function (error) { console.error(error); });
  }

  getProducts();

  },[]);

  const copiaArray = product.slice(0,3);

  return (
    <>
        <Feed>
            <ContainerProfile className="containerProfile">
                <Profile className="profile">
                    <img src={supermarket} alt="foto do comércio" />
                    <h1>NameMarket</h1>
                    <AiOutlineHeart alt="Favorito" className="favorite" />
                </Profile>
                
                <Link
                to="/VisualizacaoUsuario"                
                ><Button className="buttonSeeMore">Veja Mais</Button></Link>
            </ContainerProfile> 

            <Product className="product">
                {copiaArray.map((item) => (                    
                    <CointanerProduct className="cointanerProduct">
                        <img src={item.imageLink} alt="Foto do Produto" />
                        <h1>{item.description}</h1>
                        <p>R$ {item.price}</p>
                    </CointanerProduct> 
                ))};
            </Product>                                                    
        </Feed>
    </>
  );
}
