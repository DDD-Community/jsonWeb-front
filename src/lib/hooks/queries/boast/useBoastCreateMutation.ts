import { useMutation, useQueryClient } from 'react-query';
import { post } from '@src/api/client';
import { useNavigate } from 'react-router-dom';
import { BoastEditType } from '@src/types/boast';

export const postBoastCreateMutation = async (body: BoastEditType) =>
  post(`/boasts`, body);

export function useBoastCreateMutation({ body }: { body: BoastEditType }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(() => postBoastCreateMutation(body), {
    onSuccess: () => {
      queryClient.invalidateQueries(['boastsById']);
      navigate(`/boast`);
    },
  });
}
