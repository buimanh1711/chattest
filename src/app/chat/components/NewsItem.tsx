import { FC } from "react";
import { NewsDataType } from "../../../models/NewsInterfaces";
import { Card } from 'antd';
import { Link } from "react-router-dom";

interface NewsPropsType<T> {
  data: T;
  loading: true | false;
  key?: any;
}

const NewsItem: FC<NewsPropsType<NewsDataType>> = ({ data, loading }) => {

  return (
    <Card
      loading={loading}
      bordered={false}
      bodyStyle={{
        padding: 0,
        border: 'none',
      }}
    >
      <div className='news-item-wrapper'>
        <div className='news-title'>
          <Link to={`/articles/${data.id}`}>
            An ellipsis will be shown at the point where the text is clamped
          </Link>
        </div>
        <div className='news-content'>
          <Link className='img-link' to={`/articles/${data.id}`}>
            <div className='img-wrapper'>
              <img alt={data.title || 'title'} src={'/images/itemfake.jpg'} />
            </div>
          </Link>
          <div className='short-description'>
            <p className='clamp-line'>
              {'We can all play a part in ending the pandemic. Add a frame to your profile picture. Your new picture will be shown to your friends to inspire them to get their vaccines as soon as they can.'}
            </p>
            <div className='interact'>
              <div className='like'>
                <i className='icon icon-like' />
                <span>10</span>
              </div>
              <div className='comment'>
                <i style={{ transform: 'translateY(2px)' }} className='icon icon-comment' />
                <span>10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default NewsItem;