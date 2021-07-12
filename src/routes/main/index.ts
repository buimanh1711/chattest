import { FC } from "react";
import ArticlesPage from "../../app/article";
import ChatPage from "../../app/chat";
import ScamPage from "../../app/scamble";

export interface MainRouterType {
  name: string;
  path: string;
  component: FC;
  exact: true | false;
  auth?: true | false;
}

const mainRoutes: Array<MainRouterType> = [
  {
    name: 'Chat Page',
    path: '/',
    exact: true,
    component: ChatPage
  },
  {
    name: 'Articles Page',
    path: '/articles',
    exact: false,
    component: ArticlesPage
  }
  ,
  {
    name: 'Scamble Page',
    path: '/scam',
    exact: false,
    component: ScamPage
  }
]

export default mainRoutes;