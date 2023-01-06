import { useState } from 'react';
import { Link } from 'react-router-dom';

import iconMenu from 'assets/icons/icon-menu.svg';
import iconSearch from 'assets/icons/icon-search.svg';
import logo from 'assets/images/logo.png';
import Menu from 'components/Menu';
import Sider from 'components/Sider';

// eslint-disable-next-line arrow-body-style
const Header = ({ isCheckMenu = true }) => {
  const [isOpen, siderOpen] = useState(false);
  const showSider = () => {
    siderOpen(true);
  };
  return (
    <>
      <header className="primary-header">
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>

        <div className="primary-header-btn">
          <button className="btn">
            <Link to={'/search'}>
              <img src={iconSearch} alt="search" />
            </Link>
          </button>

          <button className="btn" onClick={showSider}>
            <img src={iconMenu} alt="menu" />
          </button>
        </div>
      </header>
      {isOpen && <Sider onClose={() => siderOpen(false)}></Sider>}
      {isCheckMenu ? <Menu /> : ''}
    </>
  );
};

export default Header;
