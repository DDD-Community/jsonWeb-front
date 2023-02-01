import { useMutation } from '@tanstack/react-query';

import { del } from '@src/api/client';

export const IMAGE_BY_ID_QUERY_KEY = 'imageById';

type ImageDeleteParam = {
  type: string;
  imageName: string;
};

export const fetchImageDelete = async ({ type, imageName }: ImageDeleteParam) =>
  del(`/images/${type}/${imageName}`);

export function useDeleteImage(type: string, imageName: string) {
  return useMutation(() => fetchImageDelete({ type, imageName }));
}
