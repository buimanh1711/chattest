import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../../app/auth/pages/Login";
import Register from "../../app/auth/pages/Register";

const LoginLayout: FC = () => {
  return (
    <div id='login-page'>
      <Switch>
        <Route path='/sign/login'>
          <Login />
        </Route>
        <Route path='/sign/register'>
          <Register />
        </Route>
      </Switch>
    </div>
  )
}

export default LoginLayout