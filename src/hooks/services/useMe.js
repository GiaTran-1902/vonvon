import useSWR from 'swr';

import { useGetAPI, usePutJSON } from 'hooks/api';

// const useGetMe = () => {
//   const getAPI = useGetAPI();
//  return async () => {

//   return await useSWR('/users/me', getAPI);
//  }
const useGetMe = () => useSWR('/users/me', useGetAPI());
// };
// const useGetMe = () => {
//   const getAPI = useGetAPI();
//   return async () => {
//     try {
//       const res = await getAPI('/users/me');
//       return res;
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

const useUpdateMe = () => {
  const putJson = usePutJSON();
  return async payload => {
    await putJson('/users/me', payload);
  };
};

export { useGetMe, useUpdateMe };
