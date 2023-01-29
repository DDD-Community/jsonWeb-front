import { useMutation, useQueryClient } from 'react-query';
import { put } from '@src/api/client';
import { useToast } from '@src/store/Toast';

export const putReviewLike = async (reviewId: number) =>
  put(`/reviews/${reviewId}/like`);

export function useReviewLikeMutation({ reviewId }: { reviewId: number }) {
  const queryClient = useQueryClient();
  const { fireToast } = useToast();
  return useMutation(() => putReviewLike(reviewId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['themesReviewListById']);
    },
    onError: async () => {
      fireToast({ content: '좋아요가 실패했어요.⛔️' });
    },
  });
}
