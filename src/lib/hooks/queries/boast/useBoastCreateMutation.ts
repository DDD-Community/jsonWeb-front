import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { BoastEditType } from '@src/types/boast';
import { useToast } from '@src/store/Toast';

import { post } from '@src/api/client';

export const postBoastCreateMutation = async (body: BoastEditType) =>
  post(`/boasts`, body);

export function useBoastCreateMutation({ body }: { body: BoastEditType }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { fireToast } = useToast();

  return useMutation(() => postBoastCreateMutation(body), {
    onSuccess: () => {
      queryClient.invalidateQueries(['allBoasts']);
      navigate(`/boast`);
      fireToast({ content: '회원님의 소중한 인증이 등록되었어요 ✨' });
    },
  });
}
