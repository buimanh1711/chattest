import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";

const BottomBars = () => {
  const asPath = useLocation().pathname
  const { isLogged } = useAppSelector(state => state.auth)

  const tabs = useMemo(() => [
    {
      path: '/',
      name: 'Chat',
      icon: <i className='icon icon-f-comment' />
    },
    {
      path: '/articles',
      name: 'Articles',
      icon: <i className='icon icon-file-article' />
    },
    {
      path: '/scam',
      name: 'Scam',
      icon: <i className='icon icon-s-warning-e' />
    }
  ], [])

  return (
    <div id='bottom-bars'>
      <div className='bars-container'>
        <ul>
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
          <li className={'tab-item ' + ((asPath === '/auth/login' || asPath === '/account') ? 'active' : '')}>
            <Link to={isLogged ? '/account' : '/sign/login'}>
              <i style={{ fontSize: 23, transform: 'translateY(-3px)' }} className='icon icon-circle-09' />
              Account
            </Link>
          </li> :
        </ul>
      </div>
    </div>
  )
}

export default BottomBars;