import "antd/dist/antd.css";
import logo from "./logo.svg";
import "./App.css";
import MainPageComponent from "./main/index.js";
import { Switch, Route, Link } from "react-router-dom";
import ExhibitionPage from "./exhibition";
import { Divider } from "antd";
//import {} from '@ant-design/icons'

function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="images/logo.png" />
          </Link>
        </div>
      </div>
      <Divider />
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainPageComponent />
          </Route>
          {/*<Route exact={true} path="/Exhibition">*/}
          <Route exact={true} path="/exhibitions/:id">
            <ExhibitionPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
