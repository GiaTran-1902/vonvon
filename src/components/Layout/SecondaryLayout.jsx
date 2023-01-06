import { Outlet } from 'react-router-dom';

import { SecondaryHeader } from 'components/Header';
const SecondaryLayout = ({ children, ...props }) => (
  <div className="layout">
    <SecondaryHeader {...props} />
    <main className="layout-main">
      {children}
      <Outlet />
    </main>
  </div>
);
export default SecondaryLayout;

// Co nut back
