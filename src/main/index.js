import React from "react";
import "./index.css";
import axios from "axios";

function MainPage() {
  const [products, setProducts] = React.useState([]);

  axios
    .get("url")
    .then(function (result) {
      const products = result.data.products;
    })
    .catch(function (error) {
      console.error("에러발생 :", error);
    });

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img class="logo" src="images/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img class="banner-img" src="images/banner1.png" />
        </div>
        <h1>Exhibition</h1>
        <div id="product-list">
          <div className="product-card">
            <div>
              <img className="product-img" src="images/banksy1.png" />
              <div className="product-contents">
                <span className="product-name"> 전시회1 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
