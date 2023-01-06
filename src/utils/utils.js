import qs from 'qs';
export const queryParams = ({ pagination = {}, ...rest }) =>
  qs.stringify({
    ...(pagination ? { pagination: { pageSize: 10, ...pagination } } : {}),
    ...rest,
  });
