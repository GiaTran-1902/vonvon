import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import { ROUTES } from 'utils';

import BongSinHandUp from 'assets/images/bongsin-handup.png';
import Button from 'components/Button';

const Success = () => {
  const { formatMessage } = useIntl();
  return (
    <div className="Success">
      <div className="Success-content">
        <img
          className="Success-img"
          src={BongSinHandUp}
          alt="success-img"
        ></img>
        <p className="Success-desc">
          <span className="Success-hightlight">
            {formatMessage({ defaultMessage: '제출 완료' })}
          </span>
          {formatMessage({ defaultMessage: '되었다봉! 감사하다봉!' })}
        </p>
      </div>
      <Link to={ROUTES.home} className="Success-link">
        <Button className="Success-btn btn-enable">
          {formatMessage({ defaultMessage: '홈으로 가기' })}
        </Button>
      </Link>
    </div>
  );
};

export default Success;
