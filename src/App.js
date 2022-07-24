import logo from "./logo.svg";
import "./App.css";
import MainPageComponent from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import ExhibitionPage from "./exhibition";

function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img className="logo-img" src="images/logo.png" />
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainPageComponent />
          </Route>
          <Route exact={true} path="/Exhibition">
            <ExhibitionPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
