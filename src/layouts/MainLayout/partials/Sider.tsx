import { Layout } from 'antd';
import { FC, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
const { Sider } = Layout;

const MainSider: FC<{ isCollapse: boolean, setIsCollapse: any }> = ({ isCollapse, setIsCollapse }) => {
  const asPath = useLocation().pathname

  const tabs = useMemo(() => [
    {
      path: '/telegram',
      name: 'Telegram Bot',
      icon: <i style={{ color: '#039BE5' }} className='icon icon-telegram' />
    },
    {
      path: '/discord',
      name: 'Discord Bot',
      icon: <i style={{ color: '#943129' }} className='icon icon-discord' />
    },
    {
      path: '/slack',
      name: 'Slack Bot',
      icon: <i style={{ color: '#cc753f' }} className='icon icon-logo-slack' />
    }
  ], [])

  useEffect(() => {
    setIsCollapse(true)
  }, [asPath, setIsCollapse])

  return (
    <Sider
      className={'main_layout-sider' + (!isCollapse ? ' active' : '')}
      breakpoint="lg"
      collapsedWidth="0"
      trigger={null}
      theme={'light'}
      width={400}
    >
      <div className='tabs-list-container hidden-scroll'>
        <ul className='tabs-list'>
          {
            tabs?.length > 0 &&
            tabs.map(item => (
              <li key={item.name} className={'tab-item ' + (asPath === item.path ? 'active' : '')}>
                <Link to={item.path}>
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))
          }
        </ul>
        <div className='tab-user'>
        </div>
      </div>
    </Sider>

  )
}

export default MainSider;