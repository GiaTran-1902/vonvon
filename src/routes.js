import { ROUTES } from 'utils';

import { BaseLayout, PrimaryLayout, SecondaryLayout } from 'components/Layout';
import About from 'pages/About';
import BusinessAffiliate from 'pages/BusinessAffiliate';
import Home from 'pages/Home';
import Login from 'pages/Login';
import NotFoundPage from 'pages/NotFoundPage';
import PrivacyPolicy from 'pages/PrivacyPolicy';
import SendOpinion from 'pages/SendOpinion';
import MBTISettings from 'pages/Setting/MBTISettings';
import Setting from 'pages/Setting/Setting';
import Signup from 'pages/Signup';
import Sucess from 'pages/Success';
import { User } from 'pages/User';
import VonVon from 'pages/VonVon';

//import DO NOT DELETE THIS LINE

const routes = [
  {
    path: '/',
    element: <PrimaryLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: ROUTES.user, element: <User /> },
      { path: ROUTES.vonvon, element: <VonVon /> },
    ],
  },
  {
    path: 'setting',
    element: <SecondaryLayout title={'MBTI 설정'} />,
    children: [
      { path: 'mbti', element: <MBTISettings /> },
      { path: '', element: <Setting /> },
    ],
  },
  {
    path: '',
    element: (
      <SecondaryLayout
        style={{ backgroundColor: '#FAEDED' }}
        title={'광고 및 제휴 문의'}
      />
    ),
    children: [
      { path: ROUTES.businessAffiliate, element: <BusinessAffiliate /> },
    ],
  },
  {
    path: `${ROUTES.businessAffiliate}1`,
    element: (
      <SecondaryLayout
        style={{ backgroundColor: '#FAEDED' }}
        title={'광고 및 제휴 문의'}
      >
        <BusinessAffiliate />
      </SecondaryLayout>
    ),
    children: [{ path: '1', element: <SendOpinion /> }],
  },
  {
    path: '',
    element: (
      <SecondaryLayout
        style={{ backgroundColor: '#FAEDED' }}
        title={'의견 보내기'}
      />
    ),
    children: [{ path: ROUTES.sendOpinion, element: <SendOpinion /> }],
  },
  {
    path: '',
    element: <SecondaryLayout title={'개인정보처리방침'} />,
    children: [{ path: ROUTES.privacyPolicy, element: <PrivacyPolicy /> }],
  },

  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { path: ROUTES.login, element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: ROUTES.success, element: <Sucess /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
];

export default routes;
