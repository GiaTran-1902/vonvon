import { usePostJSON } from 'hooks/api';

const useFeedback = () => {
  const postJson = usePostJSON();

  return async data => {
    const res = await postJson('/feedbacks', data);

    return res;
  };
};

export { useFeedback };
