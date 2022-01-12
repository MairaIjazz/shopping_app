import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import currencyformatter from "currency-formatter";
import { useParams } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { BsDash, BsPlus } from "react-icons/bs";
import "./style.css";

const ProductDetail = () => {
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const [quantity, setQuantity] = useState(1);
  // To get path params in React Router, we can use the useParams hook
  const { id } = useParams();
  // useDispatch is a function that we import from react-redux library and assign it to a variable. And with this,
  //  we are able to dispatch any action to the store by simply adding an action as an argument to the new variable
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductsReducer);
  // console.log(product);
  // useEffect: By using this Hook, you tell React that your component needs to do something after render.
  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);
  // All info is showing after this useEffect here
  // useEffect hook takes a second parameter, a “dependencies” array,
  // that will only re-run the effect when the values within the array
  //  change across re-renders. This allows us to optimize how many times the effect is run.

  return (
    <>
      <Navbar />
      <div className="container_detail">
        <h3 className="detail_heading">Product Details</h3>
        <div className="row_detail">
          <div className="product_detail_img">
            <img src={product.img} />
          </div>
          <div className="product_detail">
            <div className="product_detail_name"> {product.name}</div>
            <div className="product_detail_price">
              {" "}
              {currencyformatter.format(product.price, { code: "USD" })}
            </div>
            <div className="desc_heading">Description:</div>
            <div className="product_detail_dec">{product.desc}</div>
            <div className="incdec">
              <span className="inc" onClick={() => setQuantity(quantity + 1)}>
                <BsPlus />
              </span>
              <span className="quantity">{quantity}</span>
              <span className="dec" onClick={decreaseQuantity}>
                <BsDash />
              </span>
            </div>
            <div className="button_pro">
              <button
                className="main_button"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    // ( the key value pairs ) in your actions and passed around between reducers in your redux application.
                    // For example -,This is a generally accepted convention to have a type and a payload for an action
                    payload: { product, quantity },
                  })
                }
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
