import { useSWRConfig } from 'swr';

import { usePutAPI } from 'hooks/api';

const useUpdateBookMark = () => {
  const putAPI = usePutAPI();
  const { mutate } = useSWRConfig();

  return async (cardId, value, url) => {
    const res = await putAPI(
      `/web/bookmark/quiz/${cardId}?bookmarked=${value}`
    );
    mutate(url);

    return res;
  };
};

export { useUpdateBookMark };
