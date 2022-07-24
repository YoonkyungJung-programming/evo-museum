import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <span className="Title"> Exhibition List </span>
      <div id="exhibition-list">
        <div className="exhibition-card">
          <Link className="exhibition-link" to="/Exhibition">
            <div>
              <img
                className="exhibition-img"
                src="https://media.timeout.com/images/105611607/750/422/image.jpg"
              />
              <div className="exhibition-contents">
                <span className="exhibition-name">
                  The Art of Banksy Online
                </span>
                <span className="exhibition-exp">아트 오브 뱅크시 온라인</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
