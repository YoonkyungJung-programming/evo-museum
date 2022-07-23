import logo from "./logo.svg";
import "./App.css";
import MainPageComponent from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import ExhibitionPage from "./exhibition";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/Exhibition">
          <ExhibitionPage />
        </Route>
      </Switch>{" "}
    </div>
  );
}

export default App;
