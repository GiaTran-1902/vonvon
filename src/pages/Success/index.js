import { lazy } from 'react';

import Loadable from 'components/Loadable';

const LazySuccess = lazy(() => import('./Sucess'));

const Sucess = props => (
  <Loadable>
    <LazySuccess {...props} />
  </Loadable>
);

export default Sucess;
