import { lazy } from 'react';

import Loadable from 'components/Loadable';

const LazySignup = lazy(() => import('./Setting'));

const Signup = props => (
  <Loadable>
    <LazySignup {...props} />
  </Loadable>
);

export default Signup;
