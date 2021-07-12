import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NewsDataType } from '../../../models/NewsInterfaces';
import NewsItem from './NewsItem';

const NewsSider: FC = () => {

  const [apiLoading, setApiLoading] = useState(true);
  const [newsArr, setNewsArr] = useState([
    { id: 'hello', title: 'This is title', shortDescription: "this is short description", image: 'image_link', timestamp: '11h' },
    { id: 'hello', title: 'This is title', shortDescription: "this is short description", image: 'image_link', timestamp: '11h' },
    { id: 'hello', title: 'This is title', shortDescription: "this is short description", image: 'image_link', timestamp: '11h' },
    { id: 'hello', title: 'This is title', shortDescription: "this is short description", image: 'image_link', timestamp: '11h' },
    { id: 'hello', title: 'This is title', shortDescription: "this is short description", image: 'image_link', timestamp: '11h' },
  ]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setApiLoading(false);
      setNewsArr([
        { id: 'hello', title: 'This is title', shortDescription: "this is short description", image: 'image_link', timestamp: '11h' },
        { id: 'hello', title: 'This is title', shortDescription: "this is short description", image: 'image_link', timestamp: '11h' },
        { id: 'hello', title: 'This is title', shortDescription: "this is short description", image: 'image_link', timestamp: '11h' },
        { id: 'hello', title: 'This is title', shortDescription: "this is short description", image: 'image_link', timestamp: '11h' },
        { id: 'hello', title: 'This is title', shortDescription: "this is short description", image: 'image_link', timestamp: '11h' },
        { id: 'hello', title: 'This is title', shortDescription: "this is short description", image: 'image_link', timestamp: '11h' },
        { id: 'hello', title: 'This is title', shortDescription: "this is short description", image: 'image_link', timestamp: '11h' },
        { id: 'hello', title: 'This is title', shortDescription: "this is short description", image: 'image_link', timestamp: '11h' },
      ]);
    }, 2000);

    return () => clearTimeout(timer);
  }, [])


  const NewsList = newsArr.map((item: NewsDataType, index: number) => {
    return (
      <NewsItem loading={apiLoading} data={item} key={index} />
    );
  });

  return (
    <div className='news-sider'>
      <div className='side-body-wrapper'>
        {/* desktop: news list */}
        <div className='news-list-container hidden-scroll'>
          <h2 className='side-title'>
            Articles and News
          </h2>
          {NewsList}
          <Link style={{ display: 'block', textAlign: 'center' }} to='/articles'>See all</Link>
        </div>
      </div>
    </div>
  )
}

export default NewsSider;