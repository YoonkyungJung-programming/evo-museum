import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../config/const.js";

function MainPage() {
  const [exhibitions, setExhibitions] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(`${API_URL}/exhibitions`)
      .then(function (result) {
        const exhibitions = result.data.exhibitions;
        setExhibitions(exhibitions);
      })
      .catch(function (error) {
        console.error("Error! : ", error);
      });
  }, []);

  return (
    <div>
      <span className="Title"> Exhibition List </span>
      <div id="exhibition-list">
        {/* 옛날 버전 
        <div className="exhibition-card">
          <Link className="exhibition-link" to="/Exhibition">
            <div>
              <img
                className="exhibition-img"
                src="https://media.timeout.com/images/105611607/750/422/image.jpg"
              />
              <div className="exhibition-contents">
                <span className="name">The Art of Banksy Online</span>
                <span className="exp">아트 오브 뱅크시 온라인</span>
              </div>
            </div>
          </Link>
        </div>
      */}
        {exhibitions.map(function (exhibition, index) {
          return (
            <div className="exhibition-card">
              <Link
                style={{ color: "inherit" }}
                className="exhibition-link"
                to={`/exhibitions/${exhibition.id}`}
              >
                <div>
                  <img className="exhibition-img" src={exhibition.imageUrl} />
                </div>
                <div className="exhibition-contents">
                  <span className="name">{exhibition.name}</span>
                  <span className="exp">{exhibition.exp}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
