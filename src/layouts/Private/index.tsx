import { FC } from "react";
import { RouteProps, Route, Redirect } from "react-router-dom";

const Private: FC<RouteProps> = (props) => {
  const accessToken = localStorage.getItem('access_token')

  if (!accessToken)
    return <Redirect to='/auth/login' />

  return <Route {...props} />
}

export default Private;