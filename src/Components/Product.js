import React, { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Button,
  CardFooter,
  CardHeader,
  CardLink,
  CardText,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { getProducts } from "../apis/api";
import cart from "../assets/cart.png";
import Cart from "../Components/Cart";
import "../App.css"
import CarouselComponent from "./Carousel";
const Product = () => {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
    })();
  }, []);

  const searchItem = (e) => {
    const search = e.target.value;
    setSearchProduct(search);
    console.log(search);
    let currentList = [];
    if (search === "") {
      currentList = products;
    }
    currentList = products.filter((data) =>
      data.title.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(currentList);
  };

  const addToCart = (e) => {
    setCartData((prev) => [...prev, e]);
  };

  const gotToCart = () => {
    console.log("reached");
    history.push("/cart");
    return;
  };
  return (
    <div>
      <ul className="ul">
        <li className="logo">
          <h1>QuickKart</h1>
        </li>
        <li className="li">
          <div className="imagebox">
            <img
              src={cart}
              className="cart"
              alt="cart"
              onClick={() => gotToCart()}
            />
          </div>
        </li>
        <div style={{marginRight: "5%"}}>
        <li className="li">
          <Button outline color="secondary" onClick={() => history.push("/contact")}>Contact</Button>
        </li>{" "}
        <li className="li">
          <Button outline color="secondary" onClick={() => history.push("/about")}>About</Button>
        </li>{" "}
        <li className="li">
          <Button outline color="secondary" onClick={() => history.push("/product")}>Home</Button>
        </li>{" "}
        </div>
        <li className="searchbar">
          {" "}
          <input
            type="text"
            placeholder="Search.."
            value={searchProduct}
            onChange={searchItem}
          />
        </li>
      </ul>
      <div className="row" style={{paddingLeft: "8%"}}>
          <CarouselComponent />
        {products.map((data) => {
          return (
            <Col sm="2" className="card">
              <Card> 
                <CardHeader>{data.title}</CardHeader>
                <CardBody>
                  <CardText>
                  <CardImg top src={data.image} alt="Card image cap" />
                  </CardText>
                  <CardTitle tag="h5"> ${data.price}</CardTitle>
                  {/* <div style={{display: "flex"}}>
                  <Button></Button>
                  <Button onClick={() => addToCart(data.id)}>Add To Cart</Button>
                  </div> */}
                </CardBody>
                <CardFooter>
                  {" "}
                  <CardLink href="#">Add To WishList</CardLink>
                  <CardLink onClick={() => addToCart(data.id)}>
                    Add To Cart
                  </CardLink>
                </CardFooter>
              </Card>
              {/* <Card
                body
                style={{
                  marginBottom: "7px",
                  height: "35vh",
                  overflow: "auto",
                }}
              >
                 
                <CardBody>
                  <CardTitle tag="h5">{data.title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    ${data.price}
                  </CardSubtitle>
                  <div
                    style={{
                      justifyContent: "space-between",
                      display: "grid",
                      paddingTop: "15%",
                    }}
                  >
                    <CardFooter>
                      <Button color="link" className="wishlist">
                        Add To WishList
                      </Button>
                      <Button
                        color="link"
                        className="wishlist"
                        onClick={() => addToCart(data.id)}
                      >
                        Add To Cart
                      </Button>
                    </CardFooter>
                  </div>
                </CardBody>
              </Card> */}
            </Col>
          );
        })}
      </div>
    </div>
  );
};
export default Product;
