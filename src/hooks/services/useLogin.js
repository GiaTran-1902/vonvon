import { useNavigate } from 'react-router-dom';

import { setLocalStorage, STORAGE_TOKEN } from 'utils';

import { usePostJSON } from '../api';

export default function useLogin() {
  const navigate = useNavigate();
  const postJson = usePostJSON();
  return async () => {
    const res = await postJson('/social-login', {
      provider: 'KAKAOTALK',
    });
    setLocalStorage(STORAGE_TOKEN, res.jwt);
    navigate('/', { replace: true });
  };
}
