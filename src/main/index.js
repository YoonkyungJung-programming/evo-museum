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
          <img class="logo-img" src="images/logo.JPG" />
          <div id="menu"></div>
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img class="banner-img" src="" />
        </div>
        <h1> Exhibition </h1>
        <div id="exhibition-list">
          <div className="exhibition-card">
            <div>
              <img
                className="exhibition-img"
                src="https://media.timeout.com/images/105611607/750/422/image.jpg"
              />
              <div className="exhibition-contents">
                <span className="exhibition-name"> 전시회1 </span>
                <span className="exhibition-artist"> 아티스트 1 </span>
                <span className="exhibition-exp"> 설명 1 </span>
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
