import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import { ROUTES } from 'utils';

const Footer = () => {
  const { formatMessage } = useIntl();

  return (
    <footer className="footer">
      <h2 className="footer-title">
        {formatMessage({ defaultMessage: '(주) 어쎈딩미디어' })}
      </h2>
      <div className="footer-content">
        <span className="border-right">
          {formatMessage({ defaultMessage: '대표 한이준' })}
        </span>
        <span>
          {formatMessage({ defaultMessage: '사업자 등록번호 440-88-02086' })}
        </span>
        <p>
          {formatMessage({
            defaultMessage: '서울특별시 강남구 도곡로 206 지오빌딩 4층',
          })}
        </p>
      </div>
      <div className="footer-policy">
        <Link to={'/terms-of-service'} className="border-right">
          {formatMessage({ defaultMessage: '이용약관' })}
        </Link>
        <Link to={ROUTES.privacyPolicy}>
          {formatMessage({ defaultMessage: '개인정보 처리방침' })}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
