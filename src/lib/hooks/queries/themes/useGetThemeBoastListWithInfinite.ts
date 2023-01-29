import { useInfiniteQuery } from '@tanstack/react-query';
import { BoastListType } from '@src/types/boast';
import { Response } from '@src/types/types';
import { get } from '@src/api/client';
import { SORT_PARAM } from '@constants/common';

/**
 * @name infinite scroll 호출 단위
 * @description 현재 테스트를 위해 3개 해둠
 * @default {5}
 */
const BOAST_PAGE_ITEMS_SIZE = 3;

export const THEMES_BOASTLIST_INFINITE_BY_ID_QUERY_KEY = 'themesBoastListById';

interface BoastListTypeResponse extends Response {
  data: BoastListType;
}

interface BoastListParamInterface {
  themeId: number;
  sort?: string;
  page?: number;
  size?: number;
}

export const fetchThemeBoastListWithInfinite = async ({
  themeId,
  page = 0,
  sort,
  size,
}: BoastListParamInterface) => {
  const { data }: BoastListTypeResponse = await get(
    `/themes/${themeId}/boasts?sort=${sort}&page=${page}&size=${size}`
  );

  return {
    data,
    nextPage: page + 1,
  };
};

export function useGetThemeBoastListWithInfinite({
  themeId,
  sort = SORT_PARAM.DEFAULT,
  page = 0,
  size = BOAST_PAGE_ITEMS_SIZE,
}: BoastListParamInterface) {
  const query = useInfiniteQuery(
    [THEMES_BOASTLIST_INFINITE_BY_ID_QUERY_KEY, themeId, sort, page],
    ({ pageParam = 0 }) =>
      fetchThemeBoastListWithInfinite({
        themeId,
        page: pageParam,
        sort,
        size,
      }),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data.isLast) return undefined;
        return lastPage.nextPage ?? undefined;
      },
    }
  );

  return { ...query };
}
