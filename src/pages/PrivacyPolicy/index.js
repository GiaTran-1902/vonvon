import { lazy } from 'react';

import Loadable from 'components/Loadable';

const LazyPrivacyPolicy = lazy(() => import('./PrivacyPolicy'));

const PrivacyPolicy = props => (
  <Loadable>
    <LazyPrivacyPolicy {...props} />
  </Loadable>
);

export default PrivacyPolicy;
