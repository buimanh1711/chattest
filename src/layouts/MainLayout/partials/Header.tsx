import { FC } from "react";
import { Button, Layout, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
const { Header } = Layout;

const MainHeader: FC<{ isCollapse: boolean; setIsCollapse: any }> = ({ isCollapse, setIsCollapse }) => {
  const { isLogged, userInfo } = useAppSelector(state => state.auth)
  const { fullname } = userInfo;

  return (
    <Header
      className='main_layout-header'
    >
      <span className='tab-btn-wrapper'>
        <Button
          type="primary"
          size='large'
          ghost
          style={{
            color: 'white',
            border: 'none',
            boxShadow: 'none',
            fontSize: '1.5rem',
            verticalAlign: 'middle',
            padding: 0,
            outline: 'none'
          }}
          onClick={() => setIsCollapse(!isCollapse)}
        >
          {
            !isCollapse ?
              <i className='icon icon-e-remove' />
              :
              <i className='icon icon-menu-7' />
          }
        </Button>
      </span>
      <a href='/' style={{transform: 'translateX(-12px)'}}>
        <img alt='Chat bot' className='header-logo' src='/images/main_logo.png' />
      </a>
      <div></div>
      {
        isLogged ?
          <div className='header-user'>
            <Link to='/profile' className='user-wrapper'>
              <Avatar
                alt={fullname || 'Mạnh'}
                style={{
                  background: 'var(--my-orange)',
                  transform: 'scale(1.2)'
                }}
              >
                M
              </Avatar>
              <span className='user-fullname'>
                {fullname || 'Mạnh'}
              </span>
            </Link>
          </div>
          :
          <>
            <div className='desktop-login-wrapper'>
              <Link to='/sign/login'>
                <Button
                  type="ghost"
                  size='large'
                  shape='round'
                  style={{
                    fontSize: 16,
                    borderColor: 'rgb(226, 226, 226)',
                    color: 'white'
                  }}
                  icon={<i style={{ marginRight: 8, transform: 'translateY(2px)' }} className='icon icon-log-in' />}
                >
                  Sign In
                </Button>
              </Link>
              <Link to='/sign/register'>
                <Button
                  type="primary"
                  size='large'
                  shape='round'
                  style={{
                    fontSize: 16,
                    border: 'none',
                    marginLeft: 12,
                    background: 'var(--my-orange)'
                  }}
                  icon={<i style={{ marginRight: 8, transform: 'translateY(2px)' }} className='icon icon-recipe-create' />}
                >
                  Sign Up
                </Button>
              </Link>
            </div>
            {/* <div className='mb-login-wrapper'>
              <Link to='/sign/login'>
                <i style={{ fontSize: 25, verticalAlign: 'middle', color: 'white', transform: 'translateY(-1px)' }} className='icon icon-log-in' />
              </Link>
            </div> */}
          </>
      }
    </Header >
  );
}

export default MainHeader;