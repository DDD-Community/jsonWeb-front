import { useInfiniteQuery } from 'react-query';
import { ReviewListType } from '@src/types/review';
import { Response } from '@src/types/types';
import { get } from '@src/api/client';
import { SORT_PARAM } from '@constants/common';

const REVIEW_PAGE_ITEMS_SIZE = 5;

export const THEMES_REVIEWLIST_INFINITE_BY_ID_QUERY_KEY =
  'themesReviewListById';

interface ReviewListTypeResponse extends Response {
  data: ReviewListType;
}

interface ReviewListParamInterface {
  themeId: number;
  sort?: string;
  page?: number;
  size?: number;
}

export const fetchThemeReviewListWithInfinite = async ({
  themeId,
  page = 0,
  sort,
  size,
}: ReviewListParamInterface) => {
  const { data }: ReviewListTypeResponse = await get(
    `/themes/${themeId}/reviews?sort=${sort}&page=${page}&size=${size}`
  );

  return {
    data,
    nextPage: page + 1,
  };
};

export function useGetThemeReviewListWithInfinite({
  themeId,
  sort = SORT_PARAM.DEFAULT,
  page = 0,
  size = REVIEW_PAGE_ITEMS_SIZE,
}: ReviewListParamInterface) {
  const query = useInfiniteQuery(
    [THEMES_REVIEWLIST_INFINITE_BY_ID_QUERY_KEY, themeId, sort, page],
    ({ pageParam = 0 }) =>
      fetchThemeReviewListWithInfinite({
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
