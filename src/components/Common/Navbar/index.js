import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
// import { Button } from "../Button";

const Navbar = () => {
  // useSelector from the react-redux library. useSelector is a function
  // that takes the current state as an argument and returns whatever data
  //  you want from it. It’s very similiar to mapStateToProps() and it allows
  //  you to store the return values inside a variable within the scope of you
  // functional components instead of passing down as props.
  const { totalQuantities } = useSelector((state) => state.CartReducer);
  const [click, setClick] = useState(false);
  // useState is a Hook that allows you to have state variables in functional components.
  //  You pass the initial state to this function and it returns a
  //  variable with the current state value (not necessarily the initial state) and another function to update this value.
  // const [button, setButton] = useState(true);
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo " onClick={closeMobileMenu}>
          <i className="fas fa-gifts"></i>
          SHOPPING
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              <i className="fas fa-home"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              <i className="fas fa-heart"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className=" nav-links btnCartCount">
              <div className="count">{totalQuantities}</div>
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
        </ul>

        <ul className={click ? "mobnav-menu active" : "mobnav-menu"}>
          <li className="mobnav-item">
            <Link to="/" className="mobnav-links" onClick={closeMobileMenu}>
              <i className="fas fa-home"></i>Home
            </Link>
          </li>
          <li className="mobnav-item">
            <Link to="/" className="mobnav-links" onClick={closeMobileMenu}>
              <i className="fas fa-heart"></i>WishList
            </Link>
          </li>
          <li className="mobnav-item">
            <Link
              to="/cart"
              className=" mobnav-links mob-btnCartCount"
              onClick={closeMobileMenu}
            >
              <div className="mob-count">{totalQuantities}</div>
              <i className="fas fa-shopping-cart"></i>Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
