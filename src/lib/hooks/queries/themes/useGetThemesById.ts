import { useQuery } from '@tanstack/react-query';
import { ReviewThemeDetailType } from '@src/types/review';

import { get } from '@src/api/client';

export const THEMES_BY_ID_QUERY_KEY = 'themesById';

export const fetchThemesById = (
  themeId: number
): Promise<ReviewThemeDetailType> => get(`/themes/${themeId}`);

export function useGetThemesById({ themeId }: { themeId: number }) {
  const { data: themeData, isLoading } = useQuery(
    [THEMES_BY_ID_QUERY_KEY, themeId],
    () => fetchThemesById(themeId).then((res) => res),
    { enabled: Boolean(themeId) }
  );

  return { themeData, isLoading };
}
