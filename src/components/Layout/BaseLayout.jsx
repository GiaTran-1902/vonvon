import { Outlet } from 'react-router-dom';

const BaseLayout = () => (
  <main className="base-main layout">
    <Outlet />
  </main>
);

export default BaseLayout;

// khong header footer
