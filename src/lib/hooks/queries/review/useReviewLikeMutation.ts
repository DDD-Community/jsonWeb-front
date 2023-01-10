import { useMutation, useQueryClient } from '@tanstack/react-query';
import { put } from '@src/api/client';

export const putReviewLike = async (reviewId: number) =>
  put(`/reviews/${reviewId}/like`);

export function useReviewLikeMutation({ reviewId }: { reviewId: number }) {
  const queryClient = useQueryClient();
  return useMutation(() => putReviewLike(reviewId), {
    onSuccess: () => queryClient.invalidateQueries(['themesReviewListById']),
  });
}
