import { FC } from "react";
import LoginLayout from "../../layouts/LoginLayout";

interface LoginRouterType {
  path: string;
  component: FC;
  exact: true | false;
}

const LoginRoutes: Array<LoginRouterType> = [
  {
    path: '/login',
    component: LoginLayout,
    exact: false
  }
]

export default LoginRoutes;