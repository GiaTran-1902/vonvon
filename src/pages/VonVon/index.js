import { lazy } from 'react';

import Loadable from 'components/Loadable';

const LazyVonVon = lazy(() => import('./VonVon'));

const VonVon = props => (
  <Loadable>
    <LazyVonVon {...props} />
  </Loadable>
);

export default VonVon;
