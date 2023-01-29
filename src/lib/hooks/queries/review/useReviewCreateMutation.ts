import { useMutation, useQueryClient } from 'react-query';
import { post } from '@src/api/client';
import { useNavigate } from 'react-router-dom';
import { ReviewEditType } from '@src/types/review';
import { useToast } from '@src/store/Toast';

export const postReviewCreateMutation = async (
  themeId: number,
  body: ReviewEditType
) => post(`/themes/${themeId}/reviews`, body);

export function useReviewCreateMutation({
  themeId,
  body,
}: {
  themeId: number;
  body: ReviewEditType;
}) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { fireToast } = useToast();
  return useMutation(() => postReviewCreateMutation(themeId, body), {
    onSuccess: () => {
      queryClient.invalidateQueries(['themesReviewListById']);
      fireToast({ content: '회원님의 소중한 리뷰가 등록되었어요✨' });
      navigate(-1);
    },
    onError: async () => {
      fireToast({ content: '리뷰 등록이 실패했어요.⛔️' });
    },
  });
}
