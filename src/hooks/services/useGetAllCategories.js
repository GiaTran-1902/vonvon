import useSWR from 'swr';

import { queryParams } from 'utils';

import useGetAPI from './../api/useGetAPI';

const useGetAllCategories = payload => {
  const getAPI = useGetAPI();
  return useSWR(`/web/home?${queryParams(payload)}`, getAPI);
};

export { useGetAllCategories };
