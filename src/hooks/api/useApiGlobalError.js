// import { message } from 'antd';
import { useIntl } from 'react-intl';

import { postJSON, setLocalStorage, STORAGE_TOKEN } from 'utils';

import { useLogout } from 'hooks/services';

function useRefreshToken() {
  const logout = useLogout();
  return async () => {
    try {
      const res = await postJSON('/auth/token', {});

      setLocalStorage(STORAGE_TOKEN, res?.data?.access_token);
    } catch (error) {
      logout();
    }
  };
}
// import { useNavigate } from 'react-router-dom';

// https://docs.strapi.io/developer-docs/latest/developer-resources/error-handling.html#rest-errors
export default function useApiGlobalError() {
  const { formatMessage } = useIntl();
  // const navigate = useNavigate();
  // const logout = useLogout();
  const refreshToken = useRefreshToken();

  return (error, responseError) => {
    console.log(
      'error?.status ?? responseError?.status',
      error?.status ?? responseError?.status
    );
    switch (error?.status ?? responseError?.status) {
      // case 404:
      //   navigate('/404', { replace: true });
      //   break;

      // case 401:

      case 401:
        refreshToken();
        break;
      case 403:
        // logout();
        break;
      default:
        // message.error(
        console.error(
          error?.message
            ? formatMessage({
                id: error.message,
                defaultMessage: [],
              })
            : formatMessage({
                defaultMessage: 'Something went wrong. Try reload the page',
              })
        );
        // );
        break;
    }
  };
}
