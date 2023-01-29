import { useQuery } from 'react-query';
import { PopularType } from '@src/types/review';
import { Response } from '@src/types/types';

import { get } from '@src/api/client';

export const REVIEW_POPULAR_EMOTION_THEMES_BY_ID_QUERY_KEY =
  'reviewPopularEmotionById';

interface ReviewPopularEmotionResponse extends Response {
  data: PopularType;
}

export const fetchPopularEmotionById = (
  themeId: number
): Promise<ReviewPopularEmotionResponse> =>
  get(`/themes/${themeId}/reviews/popular-emotion`);

export function useGetPopularEmotionById({ themeId }: { themeId: number }) {
  const { data, isLoading } = useQuery(
    [REVIEW_POPULAR_EMOTION_THEMES_BY_ID_QUERY_KEY, themeId],
    () => fetchPopularEmotionById(themeId).then((res) => res.data),
    { enabled: Boolean(themeId) }
  );

  return { data, isLoading };
}
