import { lazy } from 'react';

import Loadable from 'components/Loadable';

const LazySendOpinion = lazy(() => import('./SendOpinion'));

const SendOpinion = props => (
  <Loadable>
    <LazySendOpinion {...props} />
  </Loadable>
);

export default SendOpinion;
