import qs from 'qs';
import useSWR from 'swr';

import { getAPI } from 'utils';

export default function useGetCategories(params) {
  return useSWR(`/web/home/categories?${qs.stringify(params)}`, getAPI);
}
