import { lazy } from 'react';

import Loadable from 'components/Loadable';

const LazyApp = lazy(() => import('./App'));

const App = props => (
  <Loadable>
    <LazyApp {...props} />
  </Loadable>
);

export default App;
