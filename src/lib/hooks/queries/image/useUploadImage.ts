import { useMutation } from '@tanstack/react-query';
import { useToast } from '@src/store/Toast';

import { post } from '@src/api/client';

type ImageInfoType = {
  imageName: string;
  imageUrl: string;
};

interface ImageUploadResponse extends Response {
  data: ImageInfoType;
}

export const fetchImageUpload = (
  type: string,
  body: FormData
): Promise<ImageUploadResponse> =>
  post(`/images/${type}`, body, {
    headers: { 'content-type': 'multipart/form-data' },
  });

export function useUploadImage(type: string, file: any) {
  const { fireToast } = useToast();
  const body = new FormData();
  if (file instanceof File) body.append('image', file);

  const FILE_SIZE_LIMIT = 10 * 1024 * 1024;
  let message = '';
  if (file?.size > FILE_SIZE_LIMIT) {
    message = '10MB 이하의 이미지만 등록할 수 있어요';
  }

  const query = useMutation(() => fetchImageUpload(type, body), {
    onError: () => {
      fireToast({ content: '이미지를 다시 등록해주세요 📷' });
    },
  });

  return { ...query, message };
}
