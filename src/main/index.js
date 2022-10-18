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
      {/*<span className="Title"> Exhibition List </span>*/}
      <div id="exhibition-list">
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
              </Link>
              <div className="exhibition-contents">
                <span className="name">{exhibition.name}</span>
                <span className="exp">{exhibition.exp}</span>
                <span className="exp2">{exhibition.exp2} </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
