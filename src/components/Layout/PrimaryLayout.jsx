import { Outlet } from 'react-router-dom';

import Footer from 'components/Footer';
import { PrimaryHeader } from 'components/Header';

const PrimaryLayout = ({ ...props }) => (
  <div className="layout">
    <PrimaryHeader {...props} />
    <main className="layout-main">
      <Outlet />
      <Footer />
    </main>
  </div>
);

export default PrimaryLayout;

// Co logo vonvon + footer
