import { useQuery } from '@tanstack/react-query';
import { ThemeDetailType } from '@src/types/cafe';
import { Response } from '@src/types/types';

import { get } from '@src/api/client';

export const THEMES_BY_ID_QUERY_KEY = 'themesById';

interface ThemeDetailTypeResponse extends Response {
  data: ThemeDetailType;
}

export const fetchThemesById = (
  themeId: number
): Promise<ThemeDetailTypeResponse> => get(`/themes/${themeId}`);

export function useGetThemesById({ themeId }: { themeId: number }) {
  const { data, isLoading } = useQuery(
    [THEMES_BY_ID_QUERY_KEY, themeId],
    () => fetchThemesById(themeId).then((res) => res.data),
    { enabled: Boolean(themeId) }
  );

  return { data, isLoading };
}
