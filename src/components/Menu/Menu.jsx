import { useIntl } from 'react-intl';
import { NavLink, Link } from 'react-router-dom';

import { ROUTES } from 'utils';

import LanguageSwitcher from 'components/LanguageSwitcher';

const Menu = () => {
  const { formatMessage } = useIntl();

  return (
    <nav className="menu">
      <span className="menu-item">
        <NavLink
          to={ROUTES.home}
          className={({ isActive }) =>
            isActive ? 'text-pink menu-item-line' : undefined
          }
        >
          {formatMessage({ defaultMessage: '홈' })}
          <div className="underline"></div>
        </NavLink>
      </span>
      <span className="menu-item">
        <NavLink
          to={ROUTES.vonvon}
          className={({ isActive }) =>
            isActive ? 'text-pink menu-item-line' : undefined
          }
        >
          {formatMessage({ defaultMessage: 'vonvon' })}
          <div className="underline"></div>
        </NavLink>
      </span>
    </nav>
  );
};
export default Menu;
