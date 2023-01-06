import { usePostAPI, useGetAPI } from 'hooks/api';

const useUpload = () => {
  const postAPI = usePostAPI();
  return file => postAPI('/upload', file);
};

const useGetFile = () => {
  const getAPI = useGetAPI();
  return async id => getAPI(`/upload/files/${id}`);
};

export { useUpload, useGetFile };
