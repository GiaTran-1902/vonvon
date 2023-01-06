import { lazy } from 'react';

import Loadable from 'components/Loadable';

const LazyBusinessAffiliate = lazy(() => import('./BusinessAffiliate'));

const BusinessAffiliate = props => (
  <Loadable>
    <LazyBusinessAffiliate {...props} />
  </Loadable>
);

export default BusinessAffiliate;
