import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import currencyformatter from "currency-formatter";
import { BsDash, BsPlus, BsReverseBackspaceReverse } from "react-icons/bs";

const Cart = () => {
  const { products, totalQuantities, totalPrice } = useSelector(
    (state) => state.CartReducer
  );

  const dispatch = useDispatch();
  // console.log(products, totalPrice, totalQuantities);
  return (
    <>
      <Navbar />

      <div className="container">
        <h3 className="heading_cart">Your Cart</h3>
        {products.length > 0 ? (
          <>
            <div className="row_cart">
              <div className="col-9">
                <div className="cart_heading">
                  <div className="row_cart_heading">
                    <div className="col-2">Photo</div>
                    <div className="col-2">Name</div>
                    <div className="col-2">Price</div>
                    <div className="col-2">Inc/Dec</div>
                    <div className="col-2">Total Price</div>
                    <div className="col-2">Remove</div>
                  </div>
                </div>
                {products.map((product) => (
                  <div className="row_cart_4" key={product.id}>
                    <div className="col-2">
                      <div className="cart_image">
                        <img src={product.img} width=" 70px" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart_name">{product.name}</div>
                    </div>
                    <div className="col-2">
                      <div className="cart_Price">
                        {currencyformatter.format(product.price, {
                          code: "USD",
                        })}
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart_incDec">
                        <div className="detail_row">
                          <span
                            className="inc_2"
                            onClick={() =>
                              dispatch({ type: "INC", payload: product.id })
                            }
                          >
                            <BsPlus />
                          </span>
                          <span className="quantity_2">{product.quantity}</span>
                          <span
                            className="dec_2"
                            onClick={() =>
                              dispatch({ type: "DEC", payload: product.id })
                            }
                          >
                            <BsDash />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart_total">
                        {currencyformatter.format(
                          product.price * product.quantity,
                          {
                            code: "USD",
                          }
                        )}
                      </div>
                    </div>
                    <div className="col-2">
                      <div
                        className="cart_remove"
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: product.id })
                        }
                      >
                        <BsReverseBackspaceReverse />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-3">
                <div className="summary">
                  <div className="summary_heading">Summary</div>
                  <div className="summary_details">
                    <div className="row_cart_3">
                      <div className="col-6">TotalItems :{totalQuantities}</div>

                      <div className="row_cart_2">
                        <div className="col-6">
                          TotalPrice :
                          {currencyformatter.format(totalPrice, {
                            code: "USD",
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div margin-left="3rem">
                  <Link to="/information">
                    <button className="checkout">CheckOut</button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          "Your Cart is empty"
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
