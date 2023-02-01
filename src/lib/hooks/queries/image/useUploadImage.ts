import { useQuery } from '@tanstack/react-query';
import { useToast } from '@src/store/Toast';

import { post } from '@src/api/client';

export const IMAGE_BY_ID_QUERY_KEY = 'imageById';

interface ImageFormDataParam {
  type: string;
  body: FormData;
}

type ImageInfoType = {
  imageName: string;
  imageUrl: string;
};

interface ImageUploadResponse extends Response {
  data: ImageInfoType;
}

export const fetchImageUpload = ({
  type,
  body,
}: ImageFormDataParam): Promise<ImageUploadResponse> =>
  post(`/images/${type}`, body, {
    headers: { 'content-type': 'multipart/form-data' },
  });

export function useUploadImage(type: string, body: FormData) {
  const { fireToast } = useToast();
  const { data } = useQuery([IMAGE_BY_ID_QUERY_KEY], () =>
    fetchImageUpload({ type, body })
      .then((res) => res.data)
      .catch(() => {
        fireToast({ content: '이미지를 다시 등록해주세요 📷' });
      })
  );
  return data;
}
