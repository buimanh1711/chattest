import "antd/dist/antd.css";
import '@chatui/core/dist/index.css';
import { Switch, Route } from "react-router-dom";
import LoginLayout from "./layouts/LoginLayout";
import MainLayout from "./layouts/MainLayout";

import './static/icons/scss/icons.scss'
import './static/style/common.css'
import './static/style/override.css'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path='/sign'>
          <LoginLayout />
        </Route>
        <Route path='/'>
          <MainLayout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
