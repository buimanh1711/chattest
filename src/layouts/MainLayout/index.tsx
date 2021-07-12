
import { Layout } from 'antd';
import { FC, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import mainRoutes, { MainRouterType } from '../../routes/main';
import Private from '../Private';
import BottomBars from './partials/BottomBars';
import MainFooter from './partials/Footer';
import MainHeader from './partials/Header';
import MainSider from './partials/Sider';
import './style/main_layout.scss';
const { Content } = Layout;
const MainLayout: FC = () => {
  const [isCollapse, setIsCollapse] = useState(true);

  return (
    <div id='main_layout'>
      <Layout>
        <MainHeader isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
        <Layout className='content-wrapper'>
          <MainSider isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
          <Content className='main_layout-content'>
            <Switch>
              {
                mainRoutes?.length > 0 &&
                mainRoutes.map((item: MainRouterType, index: string | number) => {
                  if (item.auth)
                    return (
                      <Private key={item.name} {...item} />
                    )

                  return <Route key={item.name} {...item} />
                })
              }
            </Switch>
          </Content>
        </Layout>
        <MainFooter />
      </Layout>
      <BottomBars />
    </div>
  )
}

export default MainLayout;