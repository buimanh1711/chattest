import { FC } from "react";
import { Layout } from 'antd';
const { Footer } = Layout;

const MainFooter: FC = () => {
  return (
    <Footer className='main_layout-footer'>
      <div className='footer-trademark'>
        <span>MB1O4ER INC. @2021</span>
      </div>
      <div className='footer-social_networks'>
        <a title='Facebook' href='https://fb.com/mb1o4er'>
          <i className='icon icon-logo-facebook' />
        </a>
        <a title='Twitter' href='https://fb.com/mb1o4er'>
          <i className='icon icon-logo-twitter' />
        </a>
        <a title='Github' href='https://fb.com/mb1o4er'>
          <i style={{ color: 'black' }} className='icon icon-logo-github' />
        </a>
      </div>
    </Footer>
  )
}

export default MainFooter;