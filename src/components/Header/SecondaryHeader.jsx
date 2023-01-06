import { useIntl } from 'react-intl';
import { useNavigate, Link } from 'react-router-dom';

import arrow from 'assets/icons/arrow-return.svg';
import imgLogo from 'assets/images/logo.png';

const SecondaryHeader = ({ title, logo, onSearch, ...props }) => {
  const navigate = useNavigate();
  const { formatMessage } = useIntl();

  return (
    <>
      <header className="secondary-header" {...props}>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="secondary-header-back"
        >
          <img src={arrow} className="secondary-header-icon" alt="back" />
        </button>

        {logo && (
          <Link to={'/'} className="secondary-header-btn">
            <img src={imgLogo} alt="logo" />
          </Link>
        )}

        {title && (
          <h3 className="secondary-header-title">
            {formatMessage({ defaultMessage: '{title}' }, { title })}
          </h3>
        )}
      </header>
    </>
  );
};
export default SecondaryHeader;
