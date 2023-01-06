import { BrowserRouter } from 'react-router-dom';

import LocaleProvider from 'i18n/LocaleProvider';

import SWRConfig from '../SWRConfig';

import Routes from './Routes';

import '../../styles/globals.css';

const App = () => (
  <LocaleProvider>
    <BrowserRouter>
      <SWRConfig>
        <Routes />
      </SWRConfig>
    </BrowserRouter>
  </LocaleProvider>
);

export default App;
