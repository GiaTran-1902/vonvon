import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Link, useNavigate } from 'react-router-dom';

import { useGetMe } from 'hooks';
import { getLocalStorage, ROUTES, STORAGE_TOKEN } from 'utils';

import inquiry from 'assets/icons/icon-inquiry.svg';
import paperLetter from 'assets/icons/icon-paper-letter.svg';
import iconQuestion from 'assets/icons/icon-question.svg';
import iconRight1 from 'assets/icons/icon-right-1.svg';
import iconRight from 'assets/icons/icon-right.svg';
import noUserAva from 'assets/images/noUserAva.png';
import BackDrop from 'components/BackDrop';

const Sider = ({ onClose }) => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const userData = useGetMe();
  const token = getLocalStorage(STORAGE_TOKEN, '');

  const fetchData = async () => {
    try {
      const user = await userData();
      if (user) {
        setUser(user);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  const checkProfile = () => {
    if (token) navigate(ROUTES.user);
    else navigate(ROUTES.login);
  };

  return (
    <BackDrop onClick={onClose} className="sider-backdrop">
      <motion.div
        className="sider"
        initial={{ x: '100%' }}
        animate={{ x: '0%' }}
      >
        <button className="sider-user-profile" onClick={checkProfile}>
          <img
            className="sider-user-ava"
            src={(token && user?.avatar?.url) || noUserAva}
            alt="avatar"
          />

          {token && (
            <div className="sider-mbti">
              <span className="sider-mbti-badge">MBTI</span>
              {user?.mbti}
            </div>
          )}

          <div className="sider-user-info">
            {(token && user?.username) ||
              formatMessage({ defaultMessage: '로그인이 필요해요' })}
            <img src={iconRight} alt="user navigate" />
          </div>
        </button>

        <div className="sider-line"></div>

        <div className="sider-content">
          <a
            className="sider-link-external"
            href="https://ascending.media/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={iconQuestion} alt="question" />

            <span className="sider-text">
              {formatMessage({ defaultMessage: '봉봉이 뭐야?' })}
            </span>

            <img className="sider-ques-icon" src={iconRight1} alt="navigate" />
          </a>
        </div>

        <div className="sider-footer">
          <Link
            to={token ? ROUTES.sendopinion : ROUTES.login}
            className="sider-link"
          >
            <img src={paperLetter} alt="send-comment" />

            <span className="sider-text">
              {formatMessage({ defaultMessage: '의견 보내기' })}
            </span>
          </Link>

          <Link to={ROUTES.businessaffiliate} className="sider-link">
            <img src={inquiry} alt="affiliate-inquiry" />

            <span className="sider-text">
              {formatMessage({ defaultMessage: '제휴 문의' })}
            </span>
          </Link>
        </div>
      </motion.div>
    </BackDrop>
  );
};

export default Sider;
