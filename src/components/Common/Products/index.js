import React from "react";
import { useSelector } from "react-redux";
import currencyformatter from "currency-formatter";
import "./style.css";
import { Link } from "react-router-dom";

const Products = () => {
  const { products } = useSelector((state) => state.ProductsReducer);
  console.log(products);
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col-3" key={product.id}>
            <div className="product">
              <Link to={`/detail/${product.id}`}>
                <div className="product_img">
                  <img width="300px" height="400px" src={product.img} />
                </div>
              </Link>
              <div className="product_name">{product.name}</div>
              <div className="product_price">
                {" "}
                {currencyformatter.format(product.price, { code: "USD" })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
