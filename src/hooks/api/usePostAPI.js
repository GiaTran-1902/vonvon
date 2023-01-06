import { postAPI } from 'utils';

import useApiGlobalError from './useApiGlobalError';

export default function usePostAPI() {
  const errorHandler = useApiGlobalError();

  return async (path, body, options) => {
    try {
      const res = await postAPI(path, {
        body,
        ...options,
      });
      return res;
    } catch (error) {
      const errorResponse = await error.response.json();

      errorHandler(errorResponse.error, error.response);
      throw errorResponse.error;
    }
  };
}
