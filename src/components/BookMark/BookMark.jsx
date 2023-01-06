import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUpdateBookMark } from 'hooks';
import { ROUTES } from 'utils';

import Bongsin_bookmark from 'assets/images/bongsin_bookmark.png';
import Modal from 'components/Modal';
import { getLocalStorage } from 'utils/storage';

const activedBookmarkIcon = fill => (
  <path
    d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17a1 1 0 0 1-1.581.814L12 17.229l-6.419 4.585A1 1 0 0 1 4 21V4z"
    fill={fill}
  ></path>
);
const BookmarkIcon = fill => (
  <path
    d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17a1 1 0 0 1-1.581.814L12 17.229l-6.419 4.585A1 1 0 0 1 4 21V4zm14 0H6v15.057l5.419-3.87a1 1 0 0 1 1.162 0L18 19.056V4z"
    fill={fill}
  ></path>
);
const BookMark = ({
  className,
  id,
  url,
  bookmarked,
  bookmarkColor,
  ...props
}) => {
  const navigate = useNavigate();
  const [isShowModal, setIsShowModal] = useState(false);
  const updateBookmark = useUpdateBookMark();

  const closeModal = e => {
    e.preventDefault();
    setIsShowModal(false);
  };
  const handlePrimaryBtnAction = e => {
    e.preventDefault();
    navigate(ROUTES.login);
  };

  const checkLogin = () => {
    if (!getLocalStorage('token')) {
      setIsShowModal(true);
      return false;
    }

    return true;
  };

  const handleBookMark = async e => {
    e.preventDefault();
    if (!checkLogin()) {
      return false;
    }

    try {
      await updateBookmark(id, !bookmarked, url);
    } catch (error) {
      console.log('error:', error);
    }
  };
  return (
    <>
      <button
        className={className ? className : 'bookmark-default'}
        onClick={handleBookMark}
        {...props}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {bookmarked
            ? activedBookmarkIcon(
                bookmarkColor?.active ? bookmarkColor.active : '#fff'
              )
            : BookmarkIcon(
                bookmarkColor?.default ? bookmarkColor.default : '#fff'
              )}
        </svg>
      </button>
      {isShowModal && (
        <Modal
          imgSrc={Bongsin_bookmark}
          description={
            <>
              <span className="modal-highlight">로그인</span>
              하면
              <br />
              댓글을 쓸 수 있다봉!
            </>
          }
          primaryBtnText={'로그인하러 가기'}
          primaryBtnAction={handlePrimaryBtnAction}
          secondBtnText={'알았어..'}
          secondBtnAction={closeModal}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default BookMark;
