import { Link } from 'react-router-dom';

import { ROUTES } from 'utils';

import VIcon from 'assets/icons/v-icon.svg';
import ViewerIcon from 'assets/icons/viewer-icon.svg';
import BookMark from 'components/BookMark';
const CardItem = ({
  data,
  cardNumber,
  className,
  width,
  url,
  bookmarkColor,
  hasDeleteBtn,
  handleDelete,
}) => (
  <Link
    to={`${ROUTES.quiz}/${data?.id}`}
    className={`carditem ${className ? className : 'carditem-defaultcard'}`}
    style={{ width }}
  >
    <div className="carditem-wrapper" style={{ width }}>
      <div className="carditem-thumbnail">
        <img
          className="carditem-image"
          src={data?.thumbnail?.formats?.thumbnail?.url}
          alt="quizz"
        />
        {data?.bookmarked !== undefined && (
          <BookMark
            id={data?.id}
            bookmarked={data.bookmarked}
            url={url}
            bookmarkColor={bookmarkColor}
          />
        )}
        {className === 'carditem-shadowcard' && (
          <img
            className="carditem-ordinalnumbers"
            src={cardNumber}
            alt="card-number"
          />
        )}
      </div>
      <div className="carditem-content">
        {className !== 'carditem-shadowcard' && (
          <div className="carditem-status-wrapper">
            {data?.hot && (
              <div className="carditem-status status-hot">
                <span>HOT</span>
              </div>
            )}
            {data?.new && (
              <div className="carditem-status status-new">
                <span>new</span>
              </div>
            )}
          </div>
        )}
        <p className="carditem-title">{data?.title}</p>
        {className !== 'carditem-shadowcard' && data?.viewers && (
          <div className="carditem-content-viewers">
            <img src={ViewerIcon} alt="viewers-icon" />
            <p className="carditem-viewnumber">{data?.viewers}</p>
          </div>
        )}
      </div>
      {data?.isExternal === false && (
        <div className="carditem-vonvoncard">
          <img src={VIcon} alt="vonvon-icon" />
        </div>
      )}
      {hasDeleteBtn && (
        <button className="carditem-deleteIcon" onClick={handleDelete}>
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" fill="#fff"></circle>
            <path
              d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3a.996.996 0 0 1-1.41 0L12 13.41 9.11 16.3a.996.996 0 1 1-1.41-1.41L10.59 12 7.7 9.11A.996.996 0 1 1 9.11 7.7L12 10.59l2.89-2.89a.996.996 0 1 1 1.41 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z"
              fill="#FF5258"
            ></path>
          </svg>
        </button>
      )}
    </div>
  </Link>
);

export default CardItem;
