import { useMutation, useQueryClient } from '@tanstack/react-query';
import { put } from '@src/api/client';

export const putBoastLike = async (boastId: number) =>
  put(`/boasts/${boastId}/likes`);

export function useBoastLikeMutation({ boastId }: { boastId: number }) {
  const queryClient = useQueryClient();
  return useMutation(() => putBoastLike(boastId), {
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['themesBoastListById', 'boastsById'],
      }),
  });
}
