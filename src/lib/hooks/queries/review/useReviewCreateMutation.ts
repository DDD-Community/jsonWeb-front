import { useMutation, useQueryClient } from '@tanstack/react-query';
import { post } from '@src/api/client';
import { useNavigate } from 'react-router-dom';
import { ReviewEditType } from '@src/types/review';

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
  return useMutation(() => postReviewCreateMutation(themeId, body), {
    onSuccess: () => {
      queryClient.invalidateQueries(['themesReviewListById']);
      navigate(`/review/detail/${themeId}`);
    },
  });
}
