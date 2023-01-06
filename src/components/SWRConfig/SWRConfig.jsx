import { SWRConfig } from 'swr';

import { useApiGlobalError } from 'hooks';
import { getAPI, getLocalStorage, STORAGE_TOKEN } from 'utils';

function Swr({ children }) {
  const errorHandler = useApiGlobalError();
  return (
    <SWRConfig
      value={{
        errorRetryCount: 1,
        shouldRetryOnError: true,
        revalidateOnFocus: false,
        revalidateIfStale: false,
        fetcher: getAPI,
        onError: async error => {
          const token = getLocalStorage(STORAGE_TOKEN, '');
          if (token) {
            const errorResponse = await error?.response?.json();
            errorHandler(errorResponse?.error, error?.response);
          }
        },
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
          console.log('retryCount', retryCount);

          if (error?.response?.status === 401)
            return setTimeout(() => revalidate({ retryCount }), 1000);
          return;
        },
      }}
    >
      {children}
    </SWRConfig>
  );
}

export default Swr;
